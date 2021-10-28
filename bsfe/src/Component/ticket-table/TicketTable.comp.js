import React from 'react'
import { Table } from 'react-bootstrap'

export const TicketTable = ({tickets}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>

            <tbody>

                {/* Load data from database */}
                {tickets.length ? tickets.map((row)=>
                (<tr key={row.id}>
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
                        <td colSpan="4" className="text-center">No ticket to show</td>
                    </tr>
                )}
                
                
            </tbody>
        </Table>
    )
}
