import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock, description}) => {

        return (
                <article className='CardItem'>
                        <header className='Header'>
                                <h2 className='ItemHeader'>
                                        {name}
                                </h2>
                        </header>
                        <picture>
                                <img src={img} alt={description} className='ItemImg'/>
                        </picture>
                        <section>
                                <p className='InfoPrice'>
                                        Precio: ${price}
                                </p>
                                <p className='InfoStock'>
                                        Stock: {stock} unidades
                                </p>
                        </section>
                        <footer className='ItemFooter'>
                                <Link to={`/item/${id}`} className='SeeDetails'> VER DETALLE </Link>
                        </footer>
                </article>
        )
}

export default Item