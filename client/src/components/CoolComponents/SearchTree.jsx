import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as $ from 'jquery'

// import custom components

// import css-stylesheet
import '../../style/coolcomponents/CoolComponents.css'

export default class SearchTree extends Component{
    componentDidMount(){
        console.log(this.props.data)
    }

    getTreeBranch = (child) => {

    }


    getDataList = () => {
        let list = <ul><li>{this.props.data.label}</li></ul>
        if(this.props.data.children){

        }
        return list
    }

    onFocusInput = () => {
        $('#dataList').fadeIn()
    }

    onBlurFocus = () => {
        $('#dataList').fadeOut()
    }

    onClickListItem = (event, idSubList) =>{
        let subList = document.getElementById(idSubList)
        let target = event.target
        if (subList.style.display === "none") {
            // subList.style.display = "block"
            target.className = "selected"
            $(subList).fadeIn()
        }else {
            // subList.style.display = "none"
            $(subList).fadeOut()
            target.className = "unselected"
        }
    }

    render(){
        return(
            <div style={{position: "relative", border: "1px solid black", display: "inline-block"}}>
                <input className="cool-input input-tree" type="search" placeholder="Enter an item to search..." name="treeSearch" list="dataList" onFocus={this.onFocusInput} onBlur={this.onBlurFocus}/>
                <ul id="dataList" className="treelist parentlist">
                    <li>{this.props.data.label}</li>
                    <li className="li-unselected" > <div className="unselected" onClick={(e) => this.onClickListItem(e, "subList")}></div> Another one
                        <ul id="subList" className="treelist" style={{display: "none"}}>
                            <li>Hello</li>
                            <li>World</li>
                        </ul>
                    </li>
                </ul>
                <label htmlFor="treeSearch" className="search-tree-label"></label>
            </div>
        )
    }
}

SearchTree.propTypes = {
    data: PropTypes.object.isRequired
}

class TreeBranch extends Component{
    render(){
        return(
            <div></div>
        )
    }
}