/* eslint-disable */
import "./App.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import shoes1 from "./img/shoes1.jpeg";
import shoes2 from "./img/shoes2.jpeg";
import shoes3 from "./img/shoes3.jpeg";
import { useState } from "react";
import data from "./data";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">I_Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={a} i={i} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  const { shoes, i } = props
  return (
    <>
      <div className="col-md-4">
        <img src={'shoes'+(i+1)} width="100%" />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </div>
    </>
  );
}

export default App;
