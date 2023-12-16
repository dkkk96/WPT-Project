import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function BlogPage2() {
  return (
    <Container className="text-start">
      <Container classname="mt-100" style={{ marginLeft: "0px" }}>
        <Row>
          <Col lg={10}>
            <Row>
              <h2 className = "mt-5">Hydrogen Cars in India: Expected Date & Overview</h2>
              <Image
                src="https://images.ctfassets.net/uwf0n1j71a7j/11vbJfpgbqpEzaji7b64cX/feb15a02ec7d99a284a5b5542255dbf4/hydrogen-cars-in-india-expected-date-and-overview.png?fm=webp&w=800&q=75"
                fluid className = "mt-3"
              />
              <h6>
                Published on Dec 06, 2023{" "}
                <Badge
                  bg="secondary"
                  className="mt-3"
                  style={{ backgroundColor: "blue" }}
                >
                  New
                </Badge>
              </h6>
              <p className="mt-3 blog-para">
                The automotive industry in India is at a crossroads. As the
                number of automobile users is increasing exponentially, so is
                the need for energy-efficient cars. The world today is dealing
                with major challenges of climate change, high fuel prices and
                environmental degradation. The need for cleaner and more
                sustainable transportation solutions has never been more
                critical.
              </p>
              <p>
                After Electric Vehicles (EVs), Hydrogen cars have emerged as a
                promising alternative to traditional petrol and diesel-powered
                vehicles. In this comprehensive exploration, we will delve into
                the world of hydrogen cars in India, examining their current
                status, potential advantages, challenges, and the road ahead.
              </p>

              <h3 className="mt-2">What are Hydrogen fuel cars?</h3>
              <p className="mt-1 blog-para">
                A hydrogen fuel car, also known as a hydrogen fuel cell vehicle
                (FCV), is an automobile that uses hydrogen gas as its primary
                fuel source. Hydrogen stored as energy is used to generate
                electricity through a chemical process in a fuel cell, which
                then powers an electric motor to run the vehicle. In these green
                hydrogen cars, the only byproducts released in the environment
                are water vapour and warm air. They are known to be more
                efficient and powerful compared to traditional internal
                combustion engine vehicles.
              </p>
              <p>
                Using new and improved technologies to make green hydrogen from
                clean energy sources and plant materials will help India have
                clean and affordable energy in the future. Hydrogen fuel cell
                vehicles offer several advantages, including fast refuelling
                times (comparable to a normal gasoline vehicle), longer driving
                ranges compared to many current electric vehicles in the market,
                and the potential to use renewable hydrogen sources for
                zero-emission driving.
              </p>
              <p>
                However, there are also a few challenges associated with
                hydrogen fuel cars, including the production, transportation,
                and storage of hydrogen, as well as the limited availability of
                hydrogen refuelling infrastructure for hydrogen vehicles in
                India.
              </p>

              <h3 className="mt-2">How does a green hydrogen car work?</h3>
              <p className="mt-1 blog-para">
                Here's the basic understanding of how a green hydrogen car
                typically works:
              </p>
              <ul className="mt-2">
                <li>
                  <strong>Hydrogen Fuel Storage: </strong> Hydrogen gas (H2) is
                  stored in high-pressure tanks in the vehicle. These tanks are
                  specially designed to store hydrogen safely.
                </li>

                <li>
                  <strong>Fuel Cell Stack:</strong>The hydrogen is fed into a fuel cell stack, which consists of multiple individual fuel cells. Each fuel cell contains an anode, a cathode, and an electrolyte membrane.
                </li>

                <li>
                  <strong>Hydrogen Oxidation:</strong> At the anode, hydrogen gas is introduced, and it splits into protons (H+) and electrons (e-). The protons pass through the electrolyte membrane, while the electrons are forced to follow an external circuit, creating an electrical current.
                </li>

                <li>
                  <strong>Oxygen Reduction:</strong>Oxygen from the air is introduced at the cathode, and it combines with the protons and electrons that have travelled through the external circuit to form water
                </li>

                <li>
                  <strong>Electricity Generation: </strong>The movement of electrons through the external circuit generates electricity, which powers an electric motor. This electric motor drives the vehicle's wheels, providing propulsion.
                </li>
              </ul>

              

              <h3 className="mt-3">Conclusion</h3>
              <p className="mt-1 ,blog-para">
              In conclusion, the introduction of hydrogen cars in India presents an exciting prospect for the automotive industry. While an exact timeline for their widespread availability remains uncertain, the emerging interest and investments in hydrogen fuel cell technology suggest a promising future. The potential of hydrogen-powered vehicles to offer a clean, efficient, and sustainable alternative to traditional fossil fuel cars mark a significant step towards achieving eco-friendly transportation solutions. As infrastructure develops and technological advancements progress, the adoption of hydrogen cars in India could revolutionize the country's automotive landscape, contributing to reduced emissions and a greener future.
              </p>

              <p className="mt-1 ,blog-para">
                Boot space is not the only important thing to look for when
                buying a new car. You must also abide by the law by purchasing
                the relevant car insurance policy for your new vehicle. Buying
                third-party insurance is mandatory for all motor vehicles in
                India, and ACKO will help you in fulfilling all your motor
                insurance needs!
              </p>

              <h3 className="mt-3">Frequently Asked Questions</h3>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  Are hydrogen cars available in India?
                  </Accordion.Header>
                  <Accordion.Body>
                  Hydrogen fuel cell vehicles are still in the early stages of development and adoption in India. Cars are still not available for consumers to purchase. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Which car runs on hydrogen in India?
                  </Accordion.Header>
                  <Accordion.Body>
                  In India, Hydrogen cars are primarily in the testing and pilot project phases. Toyota is one of the companies that has been actively involved in hydrogen fuel cell vehicle trials in India, particularly with their Mirai model
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                  How much does a hydrogen car cost in India?
                  </Accordion.Header>
                  <Accordion.Body>
                  Even though Hydrogen cars are yet to be available for sale in India, they are estimated to cost over INR 60 lakhs. 
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                  Why is hydrogen fuel not used in India?
                  </Accordion.Header>
                  <Accordion.Body>
                  Hydrogen fuel faces limited adoption in India due to challenges like insufficient infrastructure, high production costs, and safety concerns. Additionally, battery electric vehicles have dominated the clean energy market. 
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
          <Col lg={2}>
            <h5 className="mt-5">Read Other Articles...</h5>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://images.ctfassets.net/uwf0n1j71a7j/4IzSFvgGXbFE1AFVLArtP4/566fe2ea596e283dfc5031d552299e74/what-is-boot-space-in-car-explained.png?fm=webp&w=800&q=75" />
              <Card.Body>
                <Card.Title>What is Boot Space in Car?</Card.Title>
                <Card.Text>
                Boot space in a car refers to the dedicated storage area at the vehicle's rear. It provides room for luggage, groceries, or various items, separate from the passenger area. This space ensures belongings remain secure and organized during travel, enhancing convenience and comfort.
                </Card.Text>
                <LinkContainer to = "/blog/what-is-boot-space">
                <Button variant="info">Read Now</Button>
                </LinkContainer>
                
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://images.ctfassets.net/uwf0n1j71a7j/6uz9Q33bcOD49XgCKiQS3Q/25b8afb2ff8fbe25b1449ca7693f2a35/car-insurance.png?fm=webp&w=800&q=75" />
              <Card.Body>
                <Card.Title>Is it Safe to Buy/Renew Car Insurance Online?</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <LinkContainer to ='/blog/is-it-safe-to-buy-car-insurance-online'>
                <Button variant="info">Read Now</Button>
                </LinkContainer>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
