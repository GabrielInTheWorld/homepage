import React, {Component} from 'react'

import NavigationBar from './Nav/NavigationBar'
import Nav from './Nav/Nav'
import NavContainer from "./Nav/NavContainer";

let id = 0
class Navigation extends Component{
    getId(){
        return (id++).toString()
    }

    render(){
        return(
            <NavigationBar>
                <Nav id={this.getId()} to="/" text="Gabo-The-Legend"/>
                <Nav id={this.getId()} to="/dummy" text="Get the shit"/>
                <NavContainer id={this.getId()} text="Geschichten aus den Ruinen" sidebar="sidebar">
                    <Nav id={this.getId()} to="/home" text="Wie alles begann"/>
                    <Nav id={this.getId()} to="/history-next-time" text="Geschichte 2"/>
                </NavContainer>
                <Nav id={this.getId()} to="/home" text="Let's go"/>
                <Nav id={this.getId()} to="/" text="Nicht mein Tag" />
                <Nav id={this.getId()} to="/thegame" text="The Game"/>
                <Nav id={this.getId()} to="/pandp" text="Pen and Paper"/>
                <Nav id="forum" to="/forum" text="Forum"/>
            </NavigationBar>
        )
    }
}

export default Navigation