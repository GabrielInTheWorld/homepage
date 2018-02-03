import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../../style/coolcomponents/CoolComponents.css'

export default class Arrow extends Component{
    state = {
        site: ""
    }

    componentDidMount(){
        // console.log("this.props:", this.props)
        this.setState({site: this.props.site})
    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps:", nextProps)
        this.setState({site: nextProps.site})
    }

    render(){
        return(
            <i className={"arrow " + this.state.site}></i>
        )
    }
}

Arrow.propTypes = {
    site: PropTypes.string.isRequired
}