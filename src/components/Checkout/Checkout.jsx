import { useContext, useState } from 'react'
import { db } from '../../firebase/Config'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../Context/CartContext'
import { collection, documentId, getDocs, query, where, addDoc, writeBatch } from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {
        const [loading, setLoading] = useState(false)
        const [orderId, setOrderId] = useState('')

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
                                console.log('Hay productos que estan fuera de stock')
                        }

                } catch (error) {
                        console.log(error)
                }
        }

        if (loading) {
                return (
                //<h1 className='titleCheckout'> Se esta generando su orden... </h1>
                <h1 className='titleCheckout'> El Id de su orden es: {orderId} </h1> 
                )
        }

        return (
                <div>
                        <h1 className='titleCheckout'> Generar orden de pedido </h1>
                        <CheckoutForm onConfirm={createOrder} />
                </div>
        )
}

export default Checkout