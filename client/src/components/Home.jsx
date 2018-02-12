import React, {Component} from 'react'

// import css-stylesheets
import '../style/App.css'

// import custom components
import CoolButton from "./CoolComponents/CoolButton";
import SearchTree from "./CoolComponents/SearchTree";

export default class Home extends Component{
    render(){
        let backgroundStyle = {
            background: "linear-gradient(rgba(255, 153, 0, 0.05), rgba(255, 0, 0, 0.01))",
            height: "100%"
        }
        let treeItems = {
            "label": "search me",
            "value": "searchme",
            "children": [
                {
                    "label": "search me too",
                    "value": "searchmetoo",
                    "children": [
                        {
                            "label": "No one can get me",
                            "value": "anonymous"
                        }
                    ]
                },
                {
                    "label": "another item",
                    "value": "anotheritem"
                }
            ]
        }

        const onChange = (currentNode, selectedNodes) => { console.log('onChange::', currentNode, selectedNodes) }
        const onAction = ({action, node}) => { console.log(`onAction:: [${action}]`, node) }
        const onNodeToggle = (currentNode) => { console.log('onNodeToggle::', currentNode)}
            return(
            <div id="homeBackground" style={backgroundStyle}>
                <CoolButton text="Hello World" color="red"/>
                <CoolButton text="Here we are" color="blue"/>
                <CoolButton text="This is white" color="white"/>
                <SearchTree data={treeItems} />
            </div>
        )
    }
}