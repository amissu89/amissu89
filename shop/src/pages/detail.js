import { useParams } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import detailStyle from './detail.module.css';
import { useContext, useEffect, useState } from 'react';
import {Context1} from '../App.js' 

let Btn = styled.button`
    background: ${props => props.bg};
    color : ${props => props.bg === 'blue' ? 'white' : 'black'};
    padding:10px;
`

let NewBtn = styled.button(Btn);

let Box = styled.div`
    background:grey;
    padding:20px;
`

function DetailItem(props) {

    let { id } = useParams();
    let obj = getItemById(props.shoes, parseInt(id));
    let shoes = props.shoes;

    let [count, setCount] = useState(0);
    let [show, setShow] = useState(true);
    let [show2, setShow2] = useState(false);
    let [text, setText] = useState("");
    let [tab, setTab] = useState(0);
    let [fade, setFade] = useState('');

 
    /**
     * 쓰는 이유
     * 1. html이 렌더링이 되고 나서 useEffect가 동작함.
     * 2. 그래서 빠르게 화면은 먼저 보여주고, 데이터는 조금 늦게 보여주더라도 효율적으로 동작한다고 
     * 생각함. 
     * 3. 어려운 연산. 
     * 4. 서버에서 데이터 가져오는 작업들
     * 5. 타이머 사용시
     */
    useEffect(() => {
        //mount, update시 실행 (렌더링, 재렌더링 될 때)
        let timer = setTimeout(() => { setShow(false) }, 2000);
        let timer2 = setTimeout(() => { setFade('end') }, 10);
        return () => {
            //clean up function이라고함. 
            //unmount될 때 실행됨. 컴포넌트 삭제된 경우. 페이지 이동했을 때. 
            //useEffect가 되기전에 실행됨.
            //기존 타이머는 제거해주셈. 기존 코드 치우는거 여기에 많이 작성
            clearTimeout(timer);
            clearTimeout(timer2);
            /**
             * 만약 서버로 데이터 요청하는 코드가 있었다면. 
             * 재렌더링 할 때마다 계속 데이터 요청을 시도할 것. 
             * 그래서 return 함수에서 기존 요청은 삭제해달라고 할수있음
             */
        }
    }, []) //dependency : useEffect 실행 조건 넣을 수 있음
    //show의 state 값이 변경될때마다 실행되게 만들수 있음
    //[] dependency가 비어있으면 

    useEffect(() => {
        setShow2(isNaN(text));
    })
    /**
     * 1. useEffect (()=>{  }) 재 렌더링마다 코드 실행하고 싶으면
     * 2. useEffect (()=>{  }, []) mount시 1회 코드 실행하고 싶으면
     * 3. useEffect (()=>{ 
     *   return () => {
     *   }
     *  }, []) unmount 시 1회 코드 실행하고 싶으면
     * 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return() => {}
     */

    return (
        <div className={`start ${fade}`}>
            {
                show ? <div className="alert alert-warning"> 2초 이내 구매시 할인 </div> : null
            }

            {
                show2 ? <div className="alert alert-warning"> 그러지마세요 </div> : null
            }

            <input type="text" className="input-box" onChange={(e) => {
                console.log(e.target.value);
                setText(e.target.value);
            }}></input>

            <Container>
                <Row>
                    <Col>
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt='show shoe' />
                    </Col>
                    <Col>
                        <h4 className="pt-5">{obj.title}</h4>
                        <p>{obj.content}</p>
                        <p>{obj.price}</p>
                        <button className="btn btn-danger">주문하기</button>
                        <Btn bg="blue" onClick={() => setCount(count + 1)}>버튼트튼</Btn>
                        <div className={detailStyle.box}>
                            <button className={detailStyle.yellowBtn}>{count}</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="tab1">
                <Nav.Item>
                    <Nav.Link eventKey="tab0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tab1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tab2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} shoes={shoes}/>
        </div>

    )
}

function TabContent({ tab, shoes }) {
    //tab state가 변경될 때마다 실행되게함
    let [fade, setFade] = useState('');
    
    //보관함을 해체함
    let {deposit} = useContext(Context1); //{} destructing 문법
    useEffect(() => {
        //리액트의 automatic batching 기능. 
        //state 변경하는 함수가 근처에 있으면 그걸 합쳐서 한번에 처리하려고함. 
        let timer = setTimeout(() => { setFade('end') }, 100);

        return () => {
            setFade('');
            clearTimeout(timer);
        }
    }, [tab]);

    return (
        <div className={`start ${fade}`}>
            {[<div>{deposit[0]}</div>, <div>{deposit[1]}내용 1</div>, <div>{deposit[2]}내용 2</div>][tab]}
        </div>
    )
}

function getItemById(items, id) {
    return items.find(element => element.id === id)
}

export default DetailItem;