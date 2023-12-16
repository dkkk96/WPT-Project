import { Container, Row, Col, Card } from 'react-bootstrap';
import pic1 from "../Images/DineshKedari.png"; 
import pic2 from "../Images/AlishaPawar.png";
import pic3 from "../Images/KrishnaDoshi.jpeg"

export function About() {
    return (

        <>
            <Container>
                <h1>Your Trusted Car Insurance Partner</h1>
                <p>Welcome to InsureDrive, where safeguarding your journey is our top priority. With a commitment to reliability, innovation, and customer-centric solutions, we are your dedicated partners in navigating the road ahead with confidence and peace of mind.</p>
                <p>
                    At InsureDrive, we understand the significance of protection in your life's travels. Our mission is to offer comprehensive, accessible, and tailored car insurance solutions that cater to your unique needs. Whether you're a seasoned driver or a new car owner, we're here to provide you with the right coverage, exceptional service, and unwavering support every step of the way.
                </p>
                <p>
                    We InsureDrive, we don't just sell insurance; we build relationships. Your safety and peace of mind are our top priorities, and we're committed to being the partner you can rely on.
                </p>
                <p>
                    Join us on this journey of protection and security. Together, let's navigate the roads confidently, knowing you're covered with [Company Name].
                </p>
                <hr class="hr" />
                <h2><strong>Vision</strong></h2>
                <p>
                    At InsureDrive, our vision is to be the beacon of trust and reliability in the insurance industry. We aspire to redefine the insurance experience by fostering a culture of innovation, empathy, and unparalleled service, ensuring our customers feel secure and empowered on their life's journey.
                </p>
                <hr class="hr" />
                <h2><strong>Mission</strong></h2>
                <p>
                    Our mission at InsureDrive is to provide accessible, personalized, and dependable car insurance solutions. We aim to understand and cater to the diverse needs of our customers, offering tailored coverage, exceptional service, and unwavering support. Through our commitment to innovation, customer-centricity, and integrity, we strive to be the trusted partner our customers can rely on for their insurance needs.
                </p>
                <hr class="hr" />
                <h2><strong>Core Values</strong></h2>
                <ul className='text-start'>
                    <li>
                        Integrity: We conduct our business with honesty, transparency, and ethical practices.
                    </li>
                    <li>
                        Empathy: We empathize with our customers' needs and strive to provide understanding and support in every interaction.
                    </li>
                    <li>
                        Innovation: We embrace innovation and technology to continually improve and simplify the insurance experience.
                    </li>
                    <li>
                        Customer-Centricity: Our customers are at the heart of everything we do, and their satisfaction is our ultimate goal.
                    </li>
                    <li>
                        Reliability: We aim to be a steadfast and dependable partner, delivering on our promises and commitments.
                    </li>
                </ul>
                <p>
                    At InsureDrive, our vision, mission, and core values guide us in serving our customers and community with dedication, passion, and excellence.
                </p>
                <br /><br />
                <hr />
                <br /><br />
                <h3>Our Team</h3>
                <br /><br />
                <Row>
                    <Col lg="4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic1} style={{ height: '250px', width: '100%', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Dinesh Kedari</Card.Title>
                                <Card.Text>
                                   <strong>Phone no :98900 37100</strong>
                                   <br /><br />
                                   <strong>Email:kedaridinesh20@gmail.com</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic2} style={{ height: '250px', width: '100%', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Alisha Pawar</Card.Title>
                                <Card.Text>
                                <strong>Phone no : 84540 51724</strong>
                                   <br /><br />
                                   <strong>Email:pawaralisha12@gmail.com</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic3} style={{ height: '250px', width: '100%', objectFit: 'cover' }}/>
                            <Card.Body>
                                <Card.Title>Krishna Doshi</Card.Title>
                                <Card.Text>
                                   <strong>Phone no :75678 46636</strong>
                                   <br /><br />
                                   <strong>Email:krishishah1705@gmail.com </strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br /><br />
            </Container>
        </>
    );
}