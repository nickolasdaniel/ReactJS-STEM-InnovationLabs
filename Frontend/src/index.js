import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Homepage from './components/Homepage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Base extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component = {Login} />
                    <Route path="/signup" component = {Signup} />
                    <Route path="/profile" component = {Profile} />
                    <Route path='/homepage' component = {Homepage} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Base />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
