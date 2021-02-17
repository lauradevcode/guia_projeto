import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contato" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;