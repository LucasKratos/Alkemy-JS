import React, { Component } from 'react';
import './Main.css';
import fire from 'firebase';
import Login from './Form/Login';
import Register from './Form/Register';
import Tracker from './Tracker/Tracker';
import Spinner from '../assets/loader.gif';

export default class Main extends Component{

    state = {
        user: 1,
        loading:true,
        formSwitcher: false
    }

    componentDidMount(){
        this.authListener()
    }


    //oyente de autenticacion
    authListener(){
        fire.auth().onAuthStateChanged((user) => {

            if(user){
                this.setState({user});
            }else{
                this.setState({user:null});
            }  
        })
    }

    //cambio de login a register
    formSwitcher = (action) => {

        console.log(action)
        this.setState({
            formSwitcher: action === 'register' ? true : false
        })
    }

    render(){

        const form = !this.state.formSwitcher ? <Login/> : <Register/>;

        if(this.state.user === 1){
            return(
                <div className="mainBlock">

                    <div className='Spinner'>
                        <img src={Spinner} alt="Spinner" className="ImgSpinner"></img>
                    </div>
                </div>
            )
        }


        return(
        
        
            <>
                {!this.state.user ?
                    
                    (<div className="mainBlock">
                        {form}
                        {!this.state.formSwitcher ?
                            (<span className="underline">
                                No estas registrado?
                                <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')}className="linkBtn">Crea una cuenta aqui! </button>
                            </span>) : (<span className="underline">
                                Tenes cuenta?
                                <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')}className="linkBtn">Sign in! </button>
                            </span>)
                        }
                    </div>) : (<Tracker/>)
                }
            </>
        
        );
    }
}
