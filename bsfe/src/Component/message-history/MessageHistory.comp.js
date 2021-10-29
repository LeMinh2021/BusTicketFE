import React from 'react'
import {PropTypes} from "prop-types";
import { Row } from 'react-bootstrap';
import "./Message-history.style.css" ;

export const MessageHistory = ({message}) => {
    if(!message) return null
    console.log(message);
    return message.map((Row, i) =>
        <div key={i} className="message-history mt-3">
            <div className="send font-weight-bold text-secondary">
                <div className="sended">{Row.messageBy}</div>
                <div className="date">{Row.date}</div>
            </div>
            <div className="message">{Row.message}</div>
        </div>)
    
};

MessageHistory.proTypes ={
    message: PropTypes.array.isRequired,
}