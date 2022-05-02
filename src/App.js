/* eslint-disable */
import "./App.css";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Pages/Detail";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="nav-link" to="/">
            I_Shopping
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              홈
            </Link>
            <Link className="nav-link" to="/detail">
              상세페이지
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home 신발={shoes} />} />
        <Route path="/detail/:id" element={<Detail 신발={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>Member</div>} />
          <Route path="location" element={<div>Location</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<h4>첫 주문시 무지개 색 신발 끈 서비스!</h4>} />
          <Route path="two" element={<h4>생일기념 쿠폰받기</h4>} />
        </Route>
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
function About() {
  return (
    <>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </>
  );
}
function Event() {
  return (
    <>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </>
  );
}

export default App;
