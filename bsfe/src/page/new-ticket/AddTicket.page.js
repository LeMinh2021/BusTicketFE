import React , {useState}  from 'react'
import {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../Component/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../Component/breadcrumb/Breadcrumb.comp'

// 1. Create nem Form data  with elements
const initialFormData = {
    Id:"",
    Route: "" ,
    Status: "" ,
    issueDate: "",
    busesType: "",
    Old: "",
    detail: "",
    price:"",
}
//End 1
export const AddTicket = () => {
    // 2. get value form AddTicketForm with initialFormData which create in step 1
    const [FormData, setFormData] = useState("initialFormData")

    
    useEffect(() => {}, [FormData]);

    const handleOnChange  = (e) =>{
            const {name, value} = e.target;    
            setFormData({
                ...FormData,
                [name] : value
            });
            
        };   
    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log("Form submit done",FormData);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col><PageBreadcrumb page = "new ticket" /></Col>
                </Row>

                <Row>
                    <Col>
                        <AddTicketForm 
                        handleOnChange={handleOnChange} 
                        FormData = {FormData}
                        handleOnSubmit={handleOnSubmit}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
