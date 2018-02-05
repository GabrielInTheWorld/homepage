import React, {Component} from 'react'
import PropTypes from 'prop-types'

// custom components

// import styling
import '../../style/navigation/NavigationBar.css'
import NavIcon from "./NavIcon";

// TODO - Next step: make an icon at the left site of Nav, which will always be staying - right then if the screen's width is < 540px
export default class Nav extends Component{

    components = () => {
        let pStyle = {
            margin: 0,
            display: "inline",
            verticalAlign: "middle",
            lineHeight: "32px"
        }
        return <a className="Nav" id={this.props.id} href={this.props.to}><NavIcon image={this.props.icon}/><p style={pStyle}>{this.props.text}</p></a>
    }

    render(){
        return(
            this.components()
        )
    }
}

Nav.propTypes = {
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}