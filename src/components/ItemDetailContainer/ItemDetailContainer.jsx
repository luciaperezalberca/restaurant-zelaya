import { useState, useEffect } from 'react' 
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/Config'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

        const [item, setItem] = useState(null)
        const [loading, setLoading] = useState(true)

        const { itemId } = useParams()

        useEffect(() => {

                setLoading(true)

                const docRef = doc(db, 'items', itemId)

                getDoc(docRef)
                        .then(response => {
                                const data = response.data()
                                const itemAdapted = { id: response.id, ...data}
                                setItem(itemAdapted)
                        })
                        .catch(error => {
                                console.log(error)
                        })
                        .finally(() => {
                                setLoading(false)
                        })

        }, [itemId])

        return(
                <div className='ItemDetailContainer'>
                        <ItemDetail {...item} />
                </div>
        )
}

export default ItemDetailContainer