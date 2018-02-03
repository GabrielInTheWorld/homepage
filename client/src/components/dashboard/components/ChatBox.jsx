import React, {Component} from 'react'
import {connect} from 'react-redux'

class ChatBox extends Component{
    constructor(props){
        super(props)

        console.log("this.props: ", this.props)
    }

    render(){
        return(
            <div>Hello world</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        socket: state.socket,
        members: state.members
    }
}

export default connect(mapStateToProps)(ChatBox)