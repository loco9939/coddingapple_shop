/* eslint-disable */
import "./App.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">I_Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home 신발={shoes} />} />
        <Route path="/detail" element={<Detail 신발={shoes} />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <div className="col-md-4">
        <img src={"./img/shoes" + (props.i + 1) + ".jpeg"} width="100%" />
        <h4>{props.신발.title}</h4>
        <p>{props.신발.content}</p>
      </div>
    </>
  );
}

function Home(props) {
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {props.신발.map((a, i) => {
            return <Card 신발={a} i={i} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

function Detail(props) {
  console.log(props.신발[0].id);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={"./img/shoes" + (props.신발[0].id + 1) + ".jpeg"}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
