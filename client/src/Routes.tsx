import type { FC } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Manage from "./pages/Manage";
import View from "./pages/View";




const Routes: FC = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Manage} />
        <Route path="/view" exact component={View} />
    </Switch>
    </BrowserRouter>
)


export default Routes;
