import React, { Component } from "react";
import styles from "./CloseModalLayout.module.css";

/**
* Props of CloseModalLayout Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class CloseModalLayout extends Component {
    
    constructor(props){
        super(props);
        //this.controller = new CloseModalLayoutController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }

    onClose=()=>{

        if(this.props.onClose){
            this.props.onClose();
        }
    }
    
    render(){
        return(
            <div className={styles.con+" bgw lg_card_shd"}>

                {
                    this.props.closable===true?
                    <img className={styles.close+" amp_btn"} 
                    src={"/img/close_sqr.svg"}
                    onClick={this.onClose}/>:
                    null
                }

                <div className={styles.title+" tilt fdc1"}>{this.props.title}</div>

                {
                    this.props.children
                }
                
            </div>
        )
    }
}