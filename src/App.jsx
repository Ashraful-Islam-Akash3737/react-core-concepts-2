
import './App.css'
import Friend from './Friend';
import Friends from './Friends';
import Team from './Team';
import User from './User';
import Counter from './counter';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button 2 clicked');
  }
  const  addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friend></Friend>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => {alert("third btn clicked")}}>Click me 3</button>
      <button onClick={() => {addToFive(3)}}>Click me 4</button>
      
    </>
  )
}

export default App
