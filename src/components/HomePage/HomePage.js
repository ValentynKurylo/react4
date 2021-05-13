import {Link, Route, Switch} from 'react-router-dom'
import Characters from "../Characters/Characters";
import Inventories from "../Inventory/Inventories";
import InventoryDetails from "../Inventory/InventoryDetails";

function HomePage() {
    return (
        <div>
            <div><Link to={'/'}>Home page</Link></div>
            <div><Link to={'/characters'}>Characters</Link></div>
            <div><Link to={'/inventory'}>Inventory</Link></div>
            <Switch>
                <Route exact={true} path={'/'} render={() => {
                    return <center><h1>Home page</h1></center>
                }}/>
                <Route path={'/characters'} render={() => {
                    return <Characters/>
                }}/>
                <Route exact={true} path={'/inventory'} render={() => {
                    return <Inventories/>
                }}/>
                <Route exact={true} path={'/inventory/:id'} render={() => {
                    return <InventoryDetails/>
                }}/>
            </Switch>
        </div>
    )
}

export default HomePage
