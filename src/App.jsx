import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('Button 1 click me clicked');
  }

  const handleClick2 = () => {
    alert('button-2-clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <p>React Core Concept Part-2</p>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Btn 2</button>
      <button onClick={() => {
        alert('third button clicked');
      }}>Btn 3</button>

      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
