import { RiDeleteBin6Line } from "react-icons/ri"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import './CartItem.css'

const CartItem = ({ name, price, id, quantity }) => {

  const { removeItem } = useContext(CartContext)


  return (
    <div className="CartItem">

      <h2 className="nameCartItem">{name}</h2>
      <p>Precio: $ {price}</p>
      <p>Unidades: {quantity}</p>
      <p>Subtotal: $ {price * quantity}</p>
      <button className="iconRemove" onClick={() => removeItem(id)}><RiDeleteBin6Line/></button>

    </div>
  )
}

export default CartItem