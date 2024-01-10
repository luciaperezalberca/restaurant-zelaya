import { AiOutlineShoppingCart } from "react-icons/ai"
import './CartWidget.css'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from 'react-router-dom'

const CartWidget = () => {

        const { totalQuantity } = useContext(CartContext)

        return (
                <Link to='/cart' className="iconCart">
                        <AiOutlineShoppingCart/>
                        <span className="NumberCart"> {totalQuantity()} </span>
                </Link>
        )
}

export default CartWidget