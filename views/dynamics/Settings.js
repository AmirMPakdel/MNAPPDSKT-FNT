import React, { Component } from "react";
import styles from "./Settings.module.css";

/**
* Props of Settings Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class Settings extends Component {
    
    constructor(props){
        super(props);
        //this.controller = new SettingsController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <div>

                <h1>Settings Page</h1>

                
                
            </div>
        )
    }
}