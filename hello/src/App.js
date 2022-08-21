import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let str ="글1";

  let blueStyle = {
    color : 'blue'
  };
  
  function foo(){
    return 100;
  }

  //destructuring 문법
  //state로 설정하면 자동으로 html이 재렌더링됨
  //자주 변경될 것 같은 html은 state로 만들기
  let [a, b] = useState('헬로우');
  let [title, changeTitle] 
    = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, increaseLike] = useState(0);

  let date = "2월 17일 발행";

  function btnLike(){
    increaseLike(like +1)
    console.log(1)
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
      <div className="list">
        <h4>{title[0]} <span onClick={btnLike}>👍</span> {like} </h4>
        <p>{date}</p>
        
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{date}</p>
      </div>

      <button onClick={
          () =>{
            //...괄호를 벗겨주세요
            ///[] 괄호를 새로 만들어 주세요.
            let copy = [...title];
            copy[0] = "여자 코트 추천";
            console.log(copy)
            changeTitle(copy);
          }
        }>이름 변경</button>

        <button onClick={
          () =>{
            let copy = [...title];
            
            changeTitle(copy.sort());
          }
        }>정렬</button>
    </div>
  ); 
}

export default App;
