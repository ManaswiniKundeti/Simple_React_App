import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
import SignInSide from './app_files/SignInSide'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUp from './app_files/SignUp'
import Dashboard from './app_files/Dashboard'

function App() {
    return (
        <Router>
            <div >
                <Switch >
                    <Route path = "/signIn" ><SignInSide/></Route>
                    <Route path = "/signUp" ><SignUp/></Route>
                    <Route path = "/dashboard" ><Dashboard/></Route>
                    <Route path = "/" ><SignInSide/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;