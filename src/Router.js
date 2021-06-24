import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect} from "react-router-dom";
import App from './containers/MainApp/App';
import AfterPos from './containers/AfterPost/AfterPost';
import PreComplete from './containers/Finish/PreComplete';

export default function IRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/PrePost" component={App} />
                <Route exact path="/AfterPost" component={AfterPos} />
                <Route path='/PreComplete' component={PreComplete}/>
                {/* <Route path="/admin" component={Admin} /> */}
                {/* <Route exact path="/register" component={Register} /> */}
                <Redirect to='/PreComplete' component={PreComplete}/>
            </Switch>
        </Router>
    )
}
