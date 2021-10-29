import React from 'react'
import { Table } from 'react-bootstrap'
import {PropTypes} from "prop-types";

export const TicketTable = ({tickets}) => {
   
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>form</th>
                    <th>to</th>
                    <th>issueDate</th>
                    <th>busesType</th>
                    <th>Old</th>
                    <th>detail</th>
                    <th>price</th>

                </tr>
            </thead>

            <tbody>

                {/* Load data from database */}
                {tickets.length ? tickets.map((row)=>
                (<tr key={row.id}>
                     <td>{row.id}</td>
                    <td>{row.form}</td>
                    <td>{row.to}</td>
                    <td>{row.issueDate}</td>
                    <td>{row.busesType}</td>
                    <td>{row.Old}</td>
                    <td>{row.detail}</td>
                    <td>{row.price}</td>
                   
                </tr>
                )) : (
                    <tr>
                        <td colSpan="8" className="text-center">No ticket to show</td>
                    </tr>
                )}
                
                
            </tbody>
        </Table>
    )
}

TicketTable.propTypes ={
    tickets: PropTypes.array.isRequired,
}
