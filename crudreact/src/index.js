//import React, { useCallback,useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
//import {useEffect } from 'react';
import useWindowSize from './chooks';


                                                          /*class
class demo{
   sampleOne(){
      let a=10;
      let b= 5;
      let c= a + b;
      document.getElementById("root").innerHTML=c
   }
   sampleTwo(){
    let a=100;
    let b= 50;
    let c= a + b;
    document.getElementById("root").innerHTML=c
 }
}
let mydemo = new demo();
mydemo.sampleTwo(); */

                                                   /*arrow function

let z=(x) =>{
  let a =100;
  let b =25;
  let c =a+b+x ;
  document.getElementById("root").innerHTML=c
}
z(15);
*/
                                     /*Destructuring

function Calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference " + subtract + "</p>");
document.write("<p>Product: " + multiply + "</p>");
document.write("<p>Quotient " + divide + "</p>");
*/
                                         /* Rendering
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>prakash</td>
    </tr>
    <tr>
      <td>moorthy</td>
    </tr>
  </table>
);

ReactDOM.render(myelement, document.getElementById('root')); */

                                             /*JSX
let check =<div> 
  <h1 className ="header">hello world </h1> 
  <h1>Welcome to my Website</h1>
  </div>

ReactDOM.render(check,document.getElementById('root')); */

                             /*Functional Components
 function Firstfunc(){
  return <h1>Hi</h1>;
}
function Secondfunc(){
  return<p>How are u?</p>
}
function Finalea(props){
  return (   <div>  
    <h2>I am a {props.color} Car!</h2>
    <Firstfunc/> 
    <Secondfunc/>
    </div> )
 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Finalea color="red"/>); */

                                   /*Event 
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );root.render(<Usone />)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />); */
                              
                                 /*conditional 
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const car = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={car} />); */


                                                 /*use state

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />); */


                                      /*use context



function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />); */
                
                               /*use ref
function One() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<One />); */

/*use state examples
function Usone() {
  const [count,setCount]= useState(0);
return (
  <div>
    <button onClick = {() => setCount(count + 1)}>count{count}</button>
  </div>
)
}


function Ustwo(){
  const initialcount = 0;
  const [count,setcount] =useState(initialcount)
function five(){
  for(let i=0;i<5;i++)
  {
       setcount(prevCount => prevCount +1)
  }

}
return(
  <div> 
    count {count}
  <button onClick = {() => setcount(initialcount)}>reset </button>
  <button onClick = {() => setcount(prevCount => prevCount + 1)}>add</button> 
  <button onClick = {() => setcount(prevCount => prevCount - 1)}>subtract</button> 
  </div>
)

}


/*usestate in objects
function Usthree(){
  const [name,setname]=useState({ firstName :"",lastName:""})

return(
  <form>
 <input type="text" value={name.firstName} 
 onChange ={e => setname({...name,firstName:e.target.value})}/>
 <input type="text" value={name.lastName} 
 onChange ={e => setname({...name,lastName:e.target.value})}/>
 <h2>Your First name is {name.firstName}</h2>
 <h2>Your Last name is {name.lastName}</h2>
 </form>
)}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Usthree />)*/

/* use memo
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); */
                              /*callback

const MyComponent = ({ onClick }) => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    onClick();
  }, [onClick]);

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);  

const MyComponent2 = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent2 />)*/
 
                                           /*usememo

const MyComponent3 = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const area = useMemo(() => width * height, [width, height]);

  return (
    <div>
      <input type="number" value={width} onChange={e => setWidth(e.target.value)} />
      <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      <p>Area: {area}</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent3 />)

const MyComponent4 = () => {
  const [data, setData] = useState([]);

  const memoizedData = useMemo(() => {
    console.log('Data processed');
    return data.filter(item => item.active);
  }, [data]);

  return (
    <div>
      <button onClick={() => setData([...data, { id: data.length, active: true }])}>
        Add data
      </button>
      <ul>
        {memoizedData.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent4 />)*/

                             //custom hooks
 const MyComponentc = () => {
 const { width, height } = useWindowSize();
                            
return (
 <div>
     <p>Window size: {width} x {height}</p>
   </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponentc />)
