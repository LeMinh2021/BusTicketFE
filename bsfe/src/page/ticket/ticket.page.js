import React, {useState}   from 'react'
import { Container ,Col, Form, Row, Button, Breadcrumb} from 'react-bootstrap'
import { PageBreadcrumb } from '../../Component/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-ticket.json'
import { MessageHistory } from '../../Component/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../Component/update-ticket/UpdateTicket.comp'
import {useEffect} from 'react'
const ticket = tickets[0]

export const Ticket = () => {

    const[message, setMessage] = useState('')

    useEffect(() => {}, [message])

    const handleOnChange =(e) => {
        setMessage(e.target.value)
    }

    const handleOnSubmit =()=>{
        alert('Form done ')
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <PageBreadcrumb page = "Ticket"/>
                    </Col>
                </Row>

                <Row>
                    <Col >
                        <div className="id">Id: {ticket.id}</div>
                        <div className="Route">Route: {ticket.Route}</div>
                        <div className="Status">Status: {ticket.to}</div>
                        <div className="issueDate">Ticket Opened: {ticket.issueDate}</div>
                        <div className="busesType">BusesType: {ticket.busesType}</div>
                        <div className="Old">Old: {ticket.Old}</div>
                        <div className="detail">Detail: {ticket.detail}</div>
                        <div className="price">Price: {ticket.price}</div>
                    </Col>
                    <Col className="text-right">
                        <Button>Close ticket</Button>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <MessageHistory message={ticket.history}/>
                    </Col>
                </Row>

                <hr/>

                <Row className="mt-4">
                    <Col>
                        <UpdateTicket 
                        msg={message} 
                        handleOnChange = {handleOnChange}
                        handleOnSubmit = {handleOnSubmit}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
