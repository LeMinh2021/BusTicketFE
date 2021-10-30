import React, {useState} from 'react'
import './Entry.css'
import {Container, Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { LoginForm } from '../../Component/Login/Login.comp'
import { ResetPassword } from '../../Component/password-reset/PasswordReset.comp'


export const Entry = () => {

    // 1  Get value form login from
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
    const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {

            case 'email':
				setEmail(value);
				break;

            case 'password':
                setPassword(value);
                break;

			default:
				break;
		}
	};

    
    const handleOnSubmit = e => {
        e.preventDefault()

        if(!email || !password)
        {
           return alert("Fill up all the form");
        }
    }
    //end 1 


    // 2 load form for login and reset password
    const [formLoad, setFormLoad] = useState("login");

    const formSwitcher = formType =>{
        setFormLoad(formType)
    }

    const handleOnResetSubmit = e => {
        e.preventDefault()

        if(!email)
        {
           return alert("Please enter the password");
        }
    }
    //end 2
    

    return (
        <div className = "entry-page border border-dark   ">
            <div className="form-box">  

                {formLoad === 'login' && <LoginForm
                    handleOnChange = {handleOnChange} 
                    handleOnSubmit = {handleOnSubmit}
                    formSwitcher = {formSwitcher}
                    email ={email}
                    pass  ={password}
                />}             
                  
                {formLoad === 'reset' &&<ResetPassword
                    handleOnChange = {handleOnChange} 
                    handleOnResetSubmit = {handleOnResetSubmit}
                    formSwitcher = {formSwitcher}
                    email ={email}
                />}      

            </div>
        </div>
    )
}
