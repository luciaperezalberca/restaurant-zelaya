import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/Config"
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
        
        const [items, setItems] = useState([])
        const [loading, setLoading] = useState(true)
        const { categoryId } = useParams()

        useEffect(() => {
                setLoading(true)

                const collectionRef = categoryId
                        ? query(collection(db, 'items'), where('category', '==', categoryId))
                        : collection(db, 'items')

                getDocs(collectionRef)
                        .then(response => {
                                const itemAdapted = response.docs.map(doc => {
                                        const data = doc.data()
                                        return { id: doc.id, ...data}
                                })
                                setItems(itemAdapted)
                        })
                        .catch(error => {
                                console.log(error)
                        })
                        .finally(() => {
                                setLoading(false)
                        })
        }, [categoryId])
        
        return (
                <div>
                        <h1 className="greetingStyle"> {greeting} </h1>
                        <ItemList items={items}/>
                </div>
        )
}

export default ItemListContainer