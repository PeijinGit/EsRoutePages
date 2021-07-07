import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect} from "react-router-dom";
import App from './containers/MainApp/App';
import AfterPos from './containers/AfterPost/AfterPost';
import PreComplete from './containers/Finish/PreComplete';
import ErrorPage from './containers/ErrorPage/ErrorPage';
import Login from './containers/Login/login';
import Extract from './containers/Extract/extract';

export default function IRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/PrePost" component={App} />
                <Route path="/AfterPost" component={AfterPos} />
                <Route path='/PreComplete' component={PreComplete}/>
                <Route path="/ErrorPage" component={ErrorPage} />
                <Route path="/Login" component={Login} />
                <Route path="/Extract" component={Extract} />
                <Route path="/Error" component={ErrorPage} />
                <Redirect to='/Error' component={ErrorPage}/>
            </Switch>
        </Router>
    )
}
