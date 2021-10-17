import type { FC } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Manage from "./pages/Manage";




const Routes: FC = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Manage} />
    </Switch>
    </BrowserRouter>
)


export default Routes;
