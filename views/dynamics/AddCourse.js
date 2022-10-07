import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import styles from "./AddCourse.module.css";

/**
* Props of AddCourse Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class AddCourse extends Component {
    
    constructor(props){
        super(props);
        //this.controller = new AddCourseController(this);
        this.state = {
        
        }
    }
    
    componentDidMount(){
    }
    
    render(){
        return(
            <MainLayout>

                <div className={styles.con}>

                    <h1>AddCourse Page</h1>

                </div>
                
            </MainLayout>
        )
    }
}