import React, {Component} from 'react'

import NavigationBar from './Nav/NavigationBar'
import Nav from './Nav/Nav'
import NavContainer from "./Nav/NavContainer";

// import icons
import controller from '../res/navigation/controller.png'
import edit from '../res/navigation/edit.png'
import favourite from '../res/navigation/favourite.png'
import hashtag from '../res/navigation/hashtag.png'
import books from '../res/navigation/books.png'
import home from '../res/navigation/home.png'
import hourglass from '../res/navigation/hourglass.png'
import teddybear from '../res/navigation/teddybear.png'
import favicon from '../res/favicon.png'

let id = 0
class Navigation extends Component{
    getId(){
        return (id++).toString()
    }

    render(){
        console.log("image: ", controller)
        return(
            <NavigationBar>
                <Nav id={this.getId()} to="/" text="Gabo-The-Legend" icon={favicon} />
                <Nav id={this.getId()} to="/dummy" text="Get the shit" icon={teddybear} />
                <NavContainer id={this.getId()} text="Geschichten aus den Ruinen" icon={books} sidebar="sidebar">
                    <Nav id={this.getId()} to="/home" text="Wie alles begann" icon={home} />
                    <Nav id={this.getId()} to="/history-next-time" text="Geschichte 2" icon={hourglass} />
                </NavContainer>
                <Nav id="blogNav" to="/blog" text="Mein Block" icon={hashtag} />
                <Nav id={this.getId()} to="/thegame" text="The Game" icon={controller} />
                <Nav id={this.getId()} to="/pandp" text="Pen and Paper" icon={edit} />
                <Nav id="forum" to="/forum" text="Forum" icon={favourite} />
            </NavigationBar>
        )
    }
}

export default Navigation