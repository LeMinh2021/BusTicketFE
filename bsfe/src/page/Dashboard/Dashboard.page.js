import React from 'react'
import { Container, Row , Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../Component/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-ticket.json'
import { PageBreadcrumb } from '../../Component/breadcrumb/Breadcrumb.comp'
import {Link} from "react-router-dom"

export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <PageBreadcrumb page="Dashboard"/>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mt-5 mb-2">
                        <Link to ="/add-ticket">
                            <Button style={{fontSize:'1rem', padding: "10px 30px"}}>Add New ticket</Button>
                        </Link>
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