import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
        const [quantityAdded, setQuantityAdded] = useState(0)

        const { addItem } = useContext(CartContext)

        const handleOnAdd = (quantity) => {
                setQuantityAdded(quantity)

                const item = {
                        id, name, price
                }

                addItem(item, quantity)
        }

        return (
                <article className='CardItemDetail'>
                        <header className='HeaderCardDetail'>
                                <h2 className='ItemHeaderDetail'>
                                        {name}
                                </h2>
                        </header>
                        <picture>
                                <img src={img} alt={description} className='ItemImgDetail'/>
                        </picture>
                        <section>
                                <p className='InfoDetail'>
                                        {description}
                                </p>
                                <p className='InfoDetail'>
                                        Precio: ${price}
                                </p>
                                <p className='InfoCategoryDetail'>
                                        Categoría: {category}
                                </p>
                        </section>
                        <footer className='ItemFooterDetail'>
                                {
                                        quantityAdded > 0 ? (
                                                <Link to='/cart' className='buttonOrder'> VER PEDIDO </Link>
                                        ) : (
                                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                                        )
                                }
                        </footer>
                </article>
        )
}

export default ItemDetail