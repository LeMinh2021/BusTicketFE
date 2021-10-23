import React from 'react'
import { Container, Row , Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../Component/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-ticket.json'

export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center mt-5 mb-2">
                        <Button style={{fontSize:'1rem', padding: "10px 30px"}}>Add New ticket</Button>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mt-5 mb-2">
                        <div>Total ticket: 50</div>
                        <div>Pending ticket: 50</div>
                    </Col>
                </Row>

                <Row>
                    <Col className=" mt-2">
                        Recently Added tickets
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col className="recently-ticket">
                        <TicketTable tickets={tickets}/>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}