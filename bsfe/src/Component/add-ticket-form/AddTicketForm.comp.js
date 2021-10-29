
import React, {useState} from 'react'
import { Container ,Col, Form, Row, Button} from 'react-bootstrap'
import {PropTypes} from "prop-types";




export const AddTicketForm = ({handleOnSubmit,handleOnChange,FormData}) => {



    return (
        <Container>
            <h1 className="text-center">Add new ticket</h1>
            <br/>
            <Row>
                <Col>
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Route</Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                name="from"   
                                value={FormData.Route} 
                                onChange={handleOnChange}  
                                placeholder="from"  
                                required />
                            </Col>
                        </Form.Group>
                        <br/>

                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Status</Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                name="to"   
                                value={FormData.Status} 
                                onChange={handleOnChange}  
                                placeholder="to"  
                                required />
                            </Col>
                        </Form.Group>
                        <br/>

                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Buses Type</Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                name="busesType"   
                                value={FormData.busesType} 
                                onChange={handleOnChange}  
                                placeholder="busesType"  
                                required />
                            </Col>
                        </Form.Group>
                        <br/>

                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Old</Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                type="number"
                                name="oldOfCustomer"   
                                value={FormData.Old} 
                                onChange={handleOnChange}  
                                placeholder=""  
                                required />
                            </Col>
                        </Form.Group>
                        <br/>

                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Issue Found</Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                name="issueDate" 
                                type="date"   
                                value={FormData.issueDate} 
                                onChange={handleOnChange} 
                                required />
                            </Col>
                        </Form.Group>
                        <br/>

                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Price ($)</Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                type="number"
                                name="Price"   
                                value={FormData.price} 
                                onChange={handleOnChange}  
                                placeholder="$"  
                                required />
                            </Col>
                        </Form.Group>
                        <br/>

                        <Form.Group>
                            <Form.Label>Details</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            name="detail"
                            value={FormData.detail} 
                            onChange={handleOnChange} 
                            placeholder="detail" 
                            required />
                        </Form.Group>
                        <br/>

                        <Button row="5" type="submit"  >Done</Button>
                  
                    </Form>

                    
                </Col>
            </Row>
        </Container>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    FormData: PropTypes.object.isRequired,

};