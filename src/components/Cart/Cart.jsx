import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
        const { cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)

        if (totalQuantity() === 0) {
                return (
                        <div className='containerEmptyCart'>
                                <div className='emptyCart'>
                                        <h1> No hay items en el pedido </h1>
                                        <Link to='/' className='textBack'> Volver al Menu </Link>
                                </div>
                        </div>
                )
        }

        return (
                <div>
                        { cart.map(items => <CartItem key={items.id} {...items}/>)}
                        <p className='totalCart'> Total: $ {totalPrice()} </p>
                        <div className='containerCheckout'>
                                <button onClick={() => clearCart()} className='vaciarCarrito'> Vaciar pedido </button>
                                <Link to='/checkout' className='checkout'> FINALIZAR PEDIDO </Link>
                        </div>
                </div>
        )

}

export default Cart