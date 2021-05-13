import {useEffect, useState} from 'react';
import Character from "./Character";
import {Route, Switch,} from 'react-router-dom'
import CharacterInform from "./CharacterInform";

export default function Characters() {
    let [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters').then(value => value.json()).then(value => {
            setCharacters([...value])
        })
    }, [])

    return (
        <div>
            {characters.map((value, i) => <Character key={i} item={value}/>)}
            <Switch>
                <Route path={'/characters/:id'} component={CharacterInform}/>
            </Switch>
        </div>
    )
}
