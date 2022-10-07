import React, { Component } from "react";
import MainButton from "../components/MainButton";
import MainLayout from "../components/MainLayout";
import styles from "./Splash.module.css";

/**
* Props of Splash Component
* @typedef Props
* @property {string} className
* @property {React.CSSProperties} style
* 
* @extends {Component<Props>}
*/
export default class Splash extends Component {
    
    constructor(props){
        super(props);
        //this.controller = new SplashController(this);
        this.state = {
            
        }

        window.electronAPI.failedConnection(this.onFailConnection);

        //window.electronAPI.updateRequired(this.onUpdateRequired);

        // window.electronAPI.handleCounter((event, value) => {
        //     console.log(value+1);
        //     event.sender.send('counter-value', value+1)
        // })
    }
    
    componentDidMount(){

        //window.electronAPI.openFile();
        
    }

    onFailConnection = (event, value)=>{

        console.log("hi");
        window.electronAPI.retryConnection();
    }

    onUpdateRequired = (event, value)=>{

    }
    
    render(){
        return(
            <MainLayout>

                <div className={styles.con}>

                    <img className={styles.main_logo} src={"/img/minfo-pg.svg"}/>

                    {
                        true?
                        <div className={styles.retry_sec}>

                            <div className={styles.error_tx+" fdg"}>{"خطای اتصال به سرور"}</div>

                            <MainButton className={styles.retry_btn}
                            title={"تلاش مجدد"}/>

                        </div>:null
                    }

                </div>
                
            </MainLayout>
        )
    }
}