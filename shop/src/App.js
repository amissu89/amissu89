import { createContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import DetailItem from './pages/Detail.js';
import axios from 'axios';

import './App.css';

export let Context1 = createContext();

function App() {

  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let [loading, setLoading] = useState(false);
  let [deposit] = useState([10, 11, 12]);
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
            {
              loading ? <div className="alert alert-warning"> 로딩중입니다. </div> : null
            }
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

            {
              count > 3 ? null : <button onClick={() => {
                setLoading(true);
                axios.get(`https://codingapple1.github.io/shop/data${count}.json`)
                  .then((res) => {

                    let copy = [...shoes, ...res.data];
                    setShoes(copy);
                    setCount(count + 1);
                    setLoading(false);

                    //axios.post('url', {name : 'aaa'})

                    //두개 모두 다 성공했을 경우에 then이 실행됨. 
                    // Promise.all([axios.get('/url1'), axios.get('url2')])
                    // .then( () => {

                    // });

                  }).catch(() => {
                    setLoading(false);
                  })

                // fetch('url') //가능한데 json을 array나 object로 변환하는 과정이 필요함
                // .then( res => {res.json()})
                // .then( data => {})
              }}>더보기</button>
            }

          </>
        } />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ deposit, shoes }}>
            <DetailItem shoes={shoes} />
          </Context1.Provider>
        }
        />

        <Route path="/cart" >
          
        </Route>


        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버에 대해서</div>} />
          <Route path="location" element={<div>오시는 길</div>} />
        </Route>
        <Route path="*" element={<div>NO PAGE</div>} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
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

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
