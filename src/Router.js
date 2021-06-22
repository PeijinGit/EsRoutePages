import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Redirect} from "react-router-dom";
import App from './containers/MainApp/App';
import AfterPos from './containers/AfterPost/AfterPost';

export default function IRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/AfterPost" component={AfterPos} />
                {/* <Route path="/admin" component={Admin} /> */}
                {/* <Route exact path="/register" component={Register} /> */}
                {/* <Redirect to='/admin' /> */}
            </Switch>
        </Router>
    )
}
