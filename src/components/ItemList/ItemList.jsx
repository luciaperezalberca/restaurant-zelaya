import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {
        
        return (
                <div className="items">
                        {items.map(prod => <Item key={prod.id} {...prod} />)}
                </div>
        )
}

export default ItemList