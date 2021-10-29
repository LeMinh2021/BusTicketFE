import React, {useState , useEffect} from 'react'
import { Container ,Col, Form, Row, Button, Breadcrumb} from 'react-bootstrap'
import { PageBreadcrumb } from '../../Component/breadcrumb/Breadcrumb.comp'
import { SearchTicketForm } from '../../Component/search-form/SearchTicketForm.comp'
import tickets from '../../assets/data/dummy-ticket.json'
import { TicketTable } from '../../Component/ticket-table/TicketTable.comp'

export const TicketLists = () => {
    // 1 create string for search
    const [str, setStr] = useState("");
    const [displayTickets, setDisplayTickets] = useState(tickets);
    

    useEffect(() =>  {
        
    }, [str, displayTickets]);

    const handleOnchange = (e) => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);
        
    }

    const searchTicket = (searchString) =>{
        const displayTickets = tickets.filter((row) => row.Route.toLowerCase().includes(searchString.toLowerCase()));
        console.log(displayTickets);
        setDisplayTickets(displayTickets);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket Lists"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button>Add new ticket</Button>
                </Col>

                <Col>
                    <SearchTicketForm handleOnchange={handleOnchange} str={str}/>
                </Col>
            </Row>

            <hr/>

            <Row>
                <Col>
                    <TicketTable tickets={displayTickets}/>
                </Col>
            </Row>
        </Container>
    )
}
