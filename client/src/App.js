import React, { Component } from 'react';
import './style/App.css';
import {withRouter} from 'react-router-dom'

// import custom components from './components'
// import NavigationBar from './components/Nav/NavigationBar'
// import Nav from './components/Nav/Nav'
// import NavContainer from "./components/Nav/NavContainer";
import CoolButton from "./components/CoolComponents/CoolButton";

let id = 0
class App extends Component {

    state = {
    }

    componentDidMount(){

    }

    routeTo(route){
        if(!route.startsWith("/"))
            route = "/" + route
        this.props.history.push(route)
    }

    getId(){
        return (id++).toString()
    }

    render() {

        return (
            <div className="App">
                {/*<NavigationBar>*/}
                    {/*<Nav id={this.getId()} to="/pandp" text="Hello" sidebar="sidebar"/>*/}
                    {/*<NavContainer id="container1" sidebar="sidebar1" text="Geschichten aus den Ruinen">*/}
                        {/*<Nav id={this.getId()} to="/" text="Back to begin"/>*/}
                        {/*<Nav id="nav2" to="#brand" text="Geschichte 2"/>*/}
                    {/*</NavContainer>*/}
                    {/*<Nav id={this.getId()} to="/home" text="Let's go"/>*/}
                    {/*<Nav id={this.getId()} to="/" text="Nicht mein Tag" />*/}
                {/*</NavigationBar>*/}
                <h1>Hello World!</h1>
                <CoolButton text="Go next" color="red" onClick={() => this.routeTo("/getSomething")}/>
                <CoolButton text="Go back" color="blue"/>
            </div>
        );
    }
}

export default withRouter(App)
