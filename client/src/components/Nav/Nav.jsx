import React, {Component} from 'react'
import PropTypes from 'prop-types'

// custom components

// import styling
import '../../style/navigation/NavigationBar.css'

// TODO - Next step: make an icon at the left site of Nav, which will always be staying - right then if the screen's width is < 540px
export default class Nav extends Component{

    components = () => {
        return <a className="Nav" id={this.props.id} href={this.props.to}>{this.props.text}</a>
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
}