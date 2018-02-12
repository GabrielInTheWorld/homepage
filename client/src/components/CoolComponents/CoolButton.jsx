import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../../style/coolcomponents/CoolComponents.css'

// const color = [
//     "white",
//     "red",
//     "darkblue"
// ]

export default class CoolButton extends Component{
    state = {
        color: ""
    }

    componentDidMount(){
        let thisColor = " " + this.props.color
        this.setState({color: thisColor})
    }

    render(){
        return(
            <div className={"CoolButton" + this.state.color} onClick={this.props.onClick} id={this.props.id}>
                {this.props.text}
            </div>
        )
    }
}

CoolButton.defaultProps = {
    color: "white"
}

CoolButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    id: PropTypes.string,
    state: PropTypes.bool,
    color: PropTypes.string,
}