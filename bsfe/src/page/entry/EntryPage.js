import React, {useState} from 'react'
import './Entry.css'
import {Container, Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { LoginForm } from '../../Component/Login/Login.comp'


export const Entry = () => {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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

    

    return (
        <div className = "entry-page ">
            <div className="form-box">               
                <LoginForm handleOnChange = {handleOnChange} 
                    email ={email}
                    pass  ={password}
                />                
            </div>
        </div>
    )
}
