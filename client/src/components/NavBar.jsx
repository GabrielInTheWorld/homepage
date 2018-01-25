import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap'

import Logo from "../res/favicon.png"

export default class NavBar extends Component{
    componentDidMount(){

    }

    render(){
        const styleImage = {
            width: "24px",
            display: "inline"
        }

        return(
            <Navbar id="navbar" collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Gabo-The-Legend <Image style={styleImage} src={Logo} responsive/></a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#brand">Get the shit</NavItem>
                        <NavDropdown eventKey={3} title="Geschichten aus den Ruinen" id="historyDropdown">
                            <MenuItem eventKey={3.1} href="/home">Wie alles began</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="/pandp">Pen and Paper</NavItem>
                    </Nav>

                    <Nav pullRight>
                        <NavItem eventKey={2} href="/Forum">Forum</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}