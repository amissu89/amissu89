import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import DetailItem from './pages/detail.js';

import './App.css';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (

    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Work Order</Navbar.Brand>
          <Nav></Nav>
          <Nav className="me-auto">
            {/* navigate(1) 앞으로 가기 
            navigate(-1) 뒤로 가기*/}
            <Nav.Link className="font-white" onClick={() => navigate('/')}>홈</Nav.Link>
            <Nav.Link className="font-white" onClick={() => navigate('/detail')}>상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {
                  shoes.map(function (shoe, idx) {
                    return (
                      <Item
                        data={shoe}
                        src={`https://codingapple1.github.io/shop/shoes${(idx + 1)}.jpg`}
                        alt={`shoes${(idx + 1)}`}>
                      </Item>
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail/:id" element={<DetailItem shoes={shoes}/>} />
        
        <Route path="/about" element={<About/>}> 
          <Route path="member" element={<div>멤버에 대해서</div>} />
          <Route path="location" element={<div>오시는 길</div>} />
        </Route>
        <Route path="*" element={<div>NO PAGE</div>} />

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>  
        </Route>
      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <Col>
      <img src={props.src} alt={props.alt} width='80%' />
      <h4>{props.data.title}</h4>
      <p>{props.data.price}</p>
    </Col>
  )
}

function About(){
  return(
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
