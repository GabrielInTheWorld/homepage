import React from 'react'

// import custom components
import CoolButton from "./CoolComponents/CoolButton";

export default class Dummy extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <CoolButton text="Hello You!" color="white"/>
            </div>
        )
    }
}