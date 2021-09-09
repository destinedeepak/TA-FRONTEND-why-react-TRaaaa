import React from 'react';

let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];

function App() {
  return (
      <>
      <Demo />
      <Demo1 />
      </>
  );
}

function handleClick() {
  alert(`Hello React Event`);
}
function handleClick1() {
  alert('To learn React use https://reactjs.org');
  alert('React and ReactDOM works together');
  alert('Babel helps in writing JSX');
}

function handleClick3(name) {
  alert(`Hello ${name}`);
}

class Demo extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick1}>How can I help you?</button>
        {['Arya', 'John', 'Bran'].map((name,i) => (
          <button
            key = {i}
            onClick={() => {
              handleClick3(name);
            }}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}

function handleClick4(fruit){
   alert(fruit)
}

function Demo1(){
    return(
        <div>
            {fruits.map((fruit)=>(
                <button key={fruit.id} onClick={()=>{handleClick4(fruit.value)}}>{fruit.value}</button>
            ))}
        </div>
    )
}

export default App;
