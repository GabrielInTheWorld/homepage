import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as $ from 'jquery'

// import custom components

// import css-stylesheet
import '../../style/coolcomponents/CoolComponents.css'

// import icons
import arrowDown from '../../res/arrow_down.png'
import arrowRight from '../../res/arrow_right.png'

let id = 0
export default class SearchTree extends Component{
    componentDidMount(){
        console.log(this.props.data)
    }

    getId = () => {
        return ++id
    }

    onClickItem = () => {
        console.log("hello world")
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
        // $('#dataList').fadeOut()
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
        const ListElement = (props) => {
            let arrow = props.selected ? <img src={arrowDown} alt="" height={16} width={16} /> : <img src={arrowRight} alt="" height={16} width={16} />
            console.log("props listelement", props, arrow)

            let style = {
                // backgroundImage: "url(" + arrow + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "16px",
                width: "16px",
                padding: "8px",
                marginRight: "2px",
                display: "inline-block"
            }

            return(
                <li className="tree-leaf">
                    {arrow}
                    <label>
                        <input type="checkbox" value="on" />
                        <span>{props.label}</span>
                    </label>
                </li>
            )
        }

        return(
            <div style={{position: "relative", border: "1px solid black", display: "inline-block"}}>
                <input className="cool-input input-tree" type="search" placeholder="Enter an item to search..." name="treeSearch" list="dataList" onFocus={this.onFocusInput} onBlur={this.onBlurFocus}/>
                <ul id="dataList" className="treelist parentlist">
                    <ListElement selected={false} label="World" />
                    <li className="tree-leaf">
                        <img src={arrowRight} height={16} width={16} alt="" onClick={this.onClickItem}/>
                        <label>
                            <input type="checkbox" value="on"/>
                            <span>Hello</span>
                        </label>
                    </li>
                    <li className="tree-leaf">
                        <span className="unselected" onClick={(e) => { console.log(e.target.className == "unselected"); e.target.className = e.target.className === "unselected" ? "selected" : "unselected";}}></span>
                        <label>
                            <input type="checkbox" value="on"/>
                            <span>Hello</span>
                        </label>
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

// class TreeBranch extends Component{
//     render(){
//         return(
//             <div></div>
//         )
//     }
// }