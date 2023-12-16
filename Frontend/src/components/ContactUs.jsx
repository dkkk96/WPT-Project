
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

export function ContactUs() {
    const[Data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        message:'',
    });

    const handleChange=(e)=>{
      const{name, value}=e.target;
      setData((prevData)=>({
        ...prevData,[name]:value,
      }));
    };

    const handleClick=()=>{
        alert('We have received your mail');
        setData({
            name:'',
            email:'',
            phone:'',
            message:'',
        });
    };

    return (
        <>  
            <Container>
                <h1 text="Contact Us" className="contact_us"></h1>
                <Row className="sec">
                    <Col lg="5" className="mb-5">
                        <h3 className="sec_heading">Get in touch with InsureDrive</h3>
                        <br />
                        <br />
                        <address>
                            <strong>Email : insuredrive@gmail.com</strong>
                            <br />
                            <br />
                            <p>
                                <strong>Phone : +91 8454051724</strong>
                            </p>
                            <p>SV Road, Kandivali West, Mumbai</p>
                        </address>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <form className="contact_form w-100">
                            <Row>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        type="text"
                                        required
                                        value={Data.name}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        required
                                        value={Data.email}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col lg="12" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone no"
                                        type="text"
                                        required
                                        pattern="[0-9]{10}"
                                        value={Data.phone}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <textarea
                                className="form-control rounded-0"
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="5"
                                required
                                value={Data.message}
                                onChange={handleChange}
                            ></textarea>
                            <br /><br />
                            <Row>
                                <Col lg="12" className="form-group">
                                <Button variant="info" onClick={handleClick}>Send</Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row >
            </Container >
            <br />
            <br />
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mumbai Office</Card.Title>
                            <Card.Text>
                               <b>Email : insuredrive@info.com</b>
                               <br />
                               <br />
                               <b>Address : Off Link Road Borivali West, Mumbai</b>
                               <br />
                               <br />
                               <b>Phone: 55 654 541 17</b>
                               <br />
                               <br />
                               <b>Hours: Mon-Fri: 8am – 7pm</b>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Pune Office</Card.Title>
                            <Card.Text>
                               <b>Email : insuredrive@info.com</b>
                               <br />
                               <br />
                               <b>Address : Shiv Shambho Ln, behind Tower building, Pune</b>
                               <br />
                               <br />
                               <b>Phone: 55 654 541 17</b>
                               <br />
                               <br />
                               <b>Hours: Mon-Fri: 8am – 7pm</b>
                               </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Satara Office</Card.Title>
                            <Card.Text>
                               <b>Email : insuredrive@info.com</b>
                               <br />
                               <br />
                               <b>Address : SH 72. Kodolo</b>
                               <br />
                               <br />
                               <b>Phone: 55 654 541 17</b>
                               <br />
                               <br />
                               <b>Hours: Mon-Fri: 8am – 7pm</b>
                            </Card.Text>   
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br /><br />
            </Container>
        </>
    );
}