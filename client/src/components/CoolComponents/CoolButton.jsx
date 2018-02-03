import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../../style/coolcomponents/CoolComponents.css'

export default class CoolButton extends Component{
    state = {
        color: ""
    }

    componentDidMount(){
        this.setState({color: this.props.color})
    }

    render(){
        return(
            <div className={"CoolButton " + this.state.color} onClick={this.props.onClick} id={this.props.id}>
                {this.props.text}
            </div>
        )
    }
}

CoolButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    id: PropTypes.string,
    state: PropTypes.bool,
    color: PropTypes.string.isRequired
}