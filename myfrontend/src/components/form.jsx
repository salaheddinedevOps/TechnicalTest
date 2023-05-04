import React from 'react';
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Form extends React.Component {
    render() {
        return(
            <div id ='content' className='col-lg-5 mt-5'>
                
                <form className='userForm mt-5 mb-5'>
                    <h2 className='mt-2 fw-bold'>FORM DETAILS</h2>
                    <input className='col-lg-6 mt-2' type="text" placeholder='First Name' />
                    <br />
                    <input className='col-lg-6 mt-2' placeholder='Last Name' type='text'></input>
                    <br />
                    <input className='col-lg-6 mt-2'type="email" placeholder='Email' />
                    <br />
                    <textarea className='col-lg-6 mt-3'name="" id="" placeholder='About you' cols="19" rows="2"></textarea>
                    <br />
                    
                    <input className='fileInput mt-2 mb-3'type="file" id="myFile" name="filename"/>
                    <br />
                    <button className='submit col-lg-6 ms-auto'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;