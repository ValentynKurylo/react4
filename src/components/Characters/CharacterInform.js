import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function CharacterInform() {
    let params = useParams()
    let [inform, setInform] = useState([])

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters/' + params.id)
            .then(value => value.json())
            .then(value => setInform(value))
    }, [])

    return (
        <div>
            {params.id} -- {inform.occupation} -- {inform.age}
        </div>
    )
}
