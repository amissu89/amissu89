import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

//동적 UI 만드는 step
//1. html, css 미리 디자인 완성
//2. UI의 현재 상태를 state로 저장
//3. state에 따라 UI가 어떻게 보일지 작성

//요렇게 컴포넌트 만드는것도 가능
const Modal2 = () =>{
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

function ImgViewer(){
  return (
    <div className="imgView">
      <img src="/img/profile.jpg" width="300px" alt="profile img"></img>
    </div>
  )
}

function App() {

  //map : 반복적인 html 생성 가능함. jsx안에서 for문 사용불가
  //1. array 자료 갯수만큼 함수안의 코드 실행함.
  //2. 함수의 파라미터는 array안에 있던 자료
  //3. return에 뭐 적으면 array에 담아줌
  // [1,2,3].map(function(a){
  //   console.log(a);
  //   return '123123'

  // })

  let today = new Date();

  //destructuring 문법
  //state로 설정하면 자동으로 html이 재렌더링됨
  //자주 변경될 것 같은 html은 state로 만들기
  let [title, changeTitle] 
    = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [modal, setModal] = useState(false);

  let [inputStr, setInputStr] = useState('');

  let [posts, setPost] = useState([{
    title : "남자 코트 추천",
    like : 0,
    date : today.toLocaleString()
  }, 
  {
    title : "강남 우동 맛집",
    like : 0,
    date : today.toLocaleString()
  },
  {
    title : "파이썬 독학",
    like : 0,
    date : today.toLocaleString()
  },])
  let [modalTitle, setModalTitle] = useState(posts[0].title);

  function btnLike(idx){
    let copy = [...posts];
    copy[idx].like = copy[idx].like +1;
    setPost(copy);
  }

  function chTitle(){
    let copy = [...posts];
    copy[0].title = "여자 코트 추천";
    setPost(copy);
  }

  function deletePosting(idx){
    let copy = [...posts];
    copy.splice(idx, 1);
    setPost(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        Blog
      </div>
      {/* style은 object 형식으로 넣어야함 */}
      {/* <h4 style={ blueStyle}> {str} </h4> 
      <h4> {foo()} </h4> */}
      {/* <img src ={logo} alt="img"/> */}
     
      {
        posts.map(function(post, idx){
          console.log(post);
          return (
              <div className="list" key={idx}>
              <h4 onClick={()=>{
                setModal(!modal);
                setModalTitle(post.title);
              }}> 
                {post.title} 
                {/* e.stopPropagation() : 상위 html로 이벤트 버블링 막고 싶은 경우 */}
                <span type="button" onClick={(e) => {e.stopPropagation(); btnLike(idx)}}>👍</span> 
                {post.like} 
              </h4>
              <p>{post.date}</p>
              <button onClick={() => deletePosting(idx)}>삭제</button>
            </div>
            )
        })  
      }

      <input onChange={(e)=>{
        setInputStr(e.target.value);
        }}></input>

      <button onClick={() => {
        if(inputStr === "")
          return;

        let copy = [...posts];
        let obj = {
          title : inputStr,
          like : 0,
          date : today.toLocaleString()
        }
        copy.unshift(obj);
        setPost(copy);
        console.log(copy)
      }}>추가</button>

      {/* 컴포넌트 만드는 법
      1. function() 만들고 (영어 대문자로 시작하기)
      2. return()안에 html 담기
      3. <함수명> </함수명> 쓰기 */}
      
      {/* 중괄호 안에 for, if 사용 안됨 */}
      {
          modal ? <Modal title={modalTitle} color={'lightyellow'} info={title} func={chTitle}></Modal> : null
      }
      <ImgViewer/>
      <Modal3></Modal3>

      <button onClick={
          () =>{
            //...괄호를 벗겨주세요
            ///[] 괄호를 새로 만들어 주세요.
            let copy = [...posts];
            copy[0].title = "여자 코트 추천";
            setPost(copy);
          }
        }>이름 변경</button>

        <button onClick={
          () =>{
            let copy = [...posts];
            let result = copy.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
            setPost(result);
          }
        }>정렬</button>
    </div>
  ); 
}


function Modal(props){
  return(
    // div를 멀티로 리턴할수는 없음. 
    // 병렬로 리턴하려면 상위에서 div로 한번 더 감싸서 리턴
    // -> 의미없는 div 대신 <></> 사용가능
    //컴포넌트는 언제쓰나?
    //1. 반복적인 html 축약할때. 
    //2. 큰 페이지들 
    //3. 자주 변경되는 것들
    //컴포넌트의 단점 : state를 가져다쓸 때 문제 생김
    //A 함수에 있던 변수는 B함수에서 맘대로 가져다 쓸수 없음
    <div className="modal" style={{background: props.color}}>
        <h4>{props.title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=> props.func()} >글수정</button>
    </div>
  )
}

class Modal3 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : 'kim',
      age : 20,
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} </h1>        
        <h2>{this.state.age}</h2>
        <button onClick={() =>{
          this.setState({age:21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;

//부모 -> 자식 state 전송하는 법
//1. <자식 컴포넌트 작명={state 이름}>
//2. 자식 컴포넌트 만드는 곳에서 파라미터 등록. 일반적으로 props 사용
//3. props 전송은 부모->자식만 가능. 자식간, 자식에서 부모 사용 안됨
//4. props로 일반 문자 전송 가능
