import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function InventoryDetails() {
    let params = useParams()
    let [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory/' + params.id).then(value => value.json()).then(value => {
            setInventory(value)
        })
    }, [])
    return (<div>
        <h3>{inventory.id} --- {inventory.title} --- {inventory.category} --- {inventory.description} --- {inventory.slogan} --- {inventory.price} --- {inventory.stock}</h3>
    </div>)
}
