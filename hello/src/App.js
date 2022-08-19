import logo from './logo.svg';
import './App.css';

function App() {

  let str ="글1";
  
  function foo(){
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        Blog
      </div>
      {/* style은 object 형식으로 넣어야함 */}
      <h4 style={ {color:'blue'}}> {str} </h4> 
      <h4> {foo()} </h4>
      {/* <img src ={logo} alt="img"/> */}
    </div>
  );
}

export default App;
