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
            show_retry_btn:false,
            connection_check_loading:false,
        }

        window.electronAPI.failedConnection(this.onFailConnection);
    }
    
    componentDidMount(){

        //window.electronAPI.openFile();
    }

    onFailConnection = (event, value)=>{

        console.log("onFailConnection", event, value);

        this.setState({show_retry_btn:true, connection_check_loading:false});
    }

    onRetryConnectionCheck = ()=>{

        window.electronAPI.retryConnection();

        this.setState({connection_check_loading:true});
    }
    
    render(){
        return(
            <MainLayout>

                <div className={styles.con}>

                    <img className={styles.main_logo+" animate__bounceInDown"} src={"/img/minfo_logo.svg"}/>

                    {
                        this.state.show_retry_btn?
                        <div className={styles.retry_sec}>

                            <div className={styles.error_tx+" fdg"}>{"خطای اتصال به سرور"}</div>

                            <MainButton className={styles.retry_btn}
                            title={"تلاش مجدد"}
                            onClick={this.onRetryConnectionCheck}
                            loading={this.state.connection_check_loading}/>

                        </div>:null
                    }

                </div>
                
            </MainLayout>
        )
    }
}