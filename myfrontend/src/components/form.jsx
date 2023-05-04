import { useState } from 'react';
import Axios from 'axios';
import React from 'react';
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Firstname:'',
            Lastname:'',
            Email:'',
        }
    }
    handleInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit = (event) => {

        event.preventDefault();

        const url = 'http://localhost:3001/candidate';

        const user = {

            Firstname: this.state.Firstname, 
            Firstname: this.state.Lastname, 
        }

        Axios.post(url, user).then((res) => {

            //handle your login 

        }).catch((e) => {

            //handle your errors
        });

    }
    render(){
        return(
            <div id ='content' className='col-lg-5 mt-5'>
                
                <form className='userForm mt-5 mb-5'>
                    <h2 className='mt-2 fw-bold'>FORM DETAILS</h2>
                    <input className='col-lg-6 mt-2' type="text" onChange={this.handleInputChange} name='Firstname' placeholder='First Name' />
                    <br />
                    <input className='col-lg-6 mt-2' onChange={this.handleInputChange} placeholder='Last Name' name='Lastname' type='text'></input>
                    <br />
                    <input className='col-lg-6 mt-2' onChange={this.handleInputChange} type="email" name='Email' placeholder='Email' />
                    <br />
                    <textarea className='col-lg-6 mt-3' id="" placeholder='About you' cols="19" rows="2"></textarea>
                    <br />
                    
                    <input className='fileInput mt-2 mb-3'type="file" id="myFile" name="filename"/>
                    <br />
                    <button className='submit col-lg-6 ms-auto'>Submit</button>
                </form>
            </div>
        )}
    }
export default Form;