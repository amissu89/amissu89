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
  let [title, funn] 
    = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

  let date = "2월 17일 발행";

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
        <h4>{title[0]}</h4>
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
    </div>
  ); 
}

export default App;
