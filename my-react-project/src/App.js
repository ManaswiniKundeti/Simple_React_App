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

function App() {
    return ( < Router >
        <
        div >
        <
        nav >
        <
        ul >
        <
        li >
        <
        Link to = "/" > SignInSide < /Link> < /
        li > <
        li >
        <
        Link to = "/signUp" > SignUp < /Link> < /
        li > <
        li >
        <
        Link to = "/signIn" > SignInSide < /Link> < /
        li > <
        /ul> < /
        nav > <
        Switch >
        <
        Route path = "/signIn" >
        <
        SignInSide / >
        <
        /Route> <
        Route path = "/signUp"
        component = { SignUp } >
        <
        SignUp / >
        <
        /Route> <
        Route path = "/" >
        <
        SignInSide / >
        <
        /Route> < /
        Switch > <
        /div> < /
        Router >
    );
}

export default App;