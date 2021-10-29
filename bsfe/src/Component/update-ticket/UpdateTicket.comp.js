import React from 'react'
import { Container ,Col, Form, Row, Button, Breadcrumb} from 'react-bootstrap'
import {PropTypes} from "prop-types";

export const UpdateTicket = ({msg,handleOnChange, handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label></Form.Label>
                <Form.Text>Please reply your message here or update the ticket</Form.Text>
                <Form.Control
                    as="textarea"
                    row="5"
                    name="detail"
                    value={msg}
                    onChange={handleOnChange}
                />

                <div className="text-right mt-3">
                    <Button  type="submit">Reply</Button>
                </div>

        </Form>
    )
}

UpdateTicket.proTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
}
