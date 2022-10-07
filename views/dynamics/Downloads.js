import React, { Component } from "react";
import styles from "./Downloads.module.css";

/**
* Props of Downloads Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class Downloads extends Component {
    
    constructor(props){
        super(props);
        //this.controller = new DownloadsController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <div>
                
                <h1>Downloads Page</h1>
                
            </div>
        )
    }
}