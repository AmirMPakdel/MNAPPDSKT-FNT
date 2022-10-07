import React, { Component } from "react";
import styles from "./Player.module.css";

/**
* Props of Player Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class Player extends Component {
    
    constructor(props){
        super(props);
        //this.controller = new PlayerController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <div>
                
                <h1>Player Page</h1>
                
            </div>
        )
    }
}