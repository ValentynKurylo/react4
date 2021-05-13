import {Link} from 'react-router-dom'

function Character({item}) {
    return (<div>
        {item.id} --- {item.occupation} --- <Link to={'/characters/' + item.id}>Deteils</Link>

    </div>)
}

export default Character