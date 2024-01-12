import { useContext, useState } from 'react'
import { db } from '../../firebase/Config'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../Context/CartContext'
import { Timestamp, collection, documentId, getDocs, query, where, addDoc, writeBatch } from 'firebase/firestore'
import './Checkout.css'
import NotFound from '../Error/NotFound'
import { Link } from 'react-router-dom'

const Checkout = () => {
        const [loading, setLoading] = useState(false)
        const [orderId, setOrderId] = useState('')
        const [error, setError] = useState(null)

        const { cart, totalPrice, clearCart } = useContext(CartContext)
 
        const createOrder = async ({ name, phone, email }) => {
                setLoading(true)

                try {
                        const objOrder = {
                                buyer: {
                                        name, phone, email
                                },
                                items: cart,
                                total: totalPrice(),
                                date: Timestamp.fromDate(new Date())
                        }

                        const batch = writeBatch(db)
                        const outOfStock = []
                        const ids = cart.map(item => item.id)
                        const itemsRef = collection(db, 'items')
                        const itemsAddedFromFirestore = await getDocs(query(itemsRef, where(documentId(), 'in', ids )))
                        const { docs } = itemsAddedFromFirestore

                        docs.forEach(doc => {
                                const dataDoc = doc.data()
                                const stockDb = dataDoc.stock

                                const itemAddedToCart = cart.find(item => item.id === doc.id)
                                const itemQuantity = itemAddedToCart?.quantity

                                if(stockDb >= itemQuantity) {
                                        batch.update(doc.ref, { stock: stockDb - itemQuantity })
                                } else {
                                        outOfStock.push({ id: doc.id, ...dataDoc})
                                }
                        })

                        if(outOfStock.length === 0) {
                                await batch.commit()

                                const orderRef = collection(db, 'orders')
                                const orderAdded = await addDoc(orderRef, objOrder)

                                setOrderId(orderAdded.id)
                                clearCart()
                        } else {
                                const errorMessage = "Algunos productos están fuera de stock"
                                setError(errorMessage)
                        }

                } catch (error) {
                        setError(error)
                } finally {
                        setLoading(false)
                }
        }

        if (loading) {
                return (
                        <div className='containerOrder'>
                                <h1 className='titleCheckout'> Se esta generando su orden... </h1>
                        </div>
                )
        }

        if (orderId) {
                return (
                        <div className='containerOrder'>
                                <h1 className='titleCheckout'> Gracias por su pedido </h1>
                                <p className='titleCheckoutOrder'> El Id de su orden es: {orderId} </p>
                                <Link to='/' className='textBack'> Volver al Menu </Link>
                        </div>
                )
        }

        if (error) {
                return <NotFound/>
        }

        return (
                <div>
                        <h1 className='titleCheckout'> Generar orden de pedido </h1>
                        <CheckoutForm onConfirm={createOrder} />
                </div>
        )
}

export default Checkout