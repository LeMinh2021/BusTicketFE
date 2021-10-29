import React from 'react'
import { Container ,Col, Form, Row, Button, Breadcrumb} from 'react-bootstrap'
import {PropTypes} from "prop-types";

export const SearchTicketForm = ({handleOnchange,str}) => {
    console.log(str);
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Search : {""}
                    </Form.Label>

                    <Col sm="10">
                        <Form.Control 
                        name="searchString"
                        onChange={handleOnchange}
                        value={str}
                        />   
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

SearchTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,

};
