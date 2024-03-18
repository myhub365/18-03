// import logo from './logo.svg';
import React, {useState , useEffect} from 'react';
import './App.css';


function App() {

  
  const [counts, setCounts] = useState(60);
  const [count, setCount] = useState(60);
  const [color , setColor] = useState("Red");
  const [name , setMy] = useState("Your name");
  const [email , setEmail] = useState("Enater your Email");

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000*60);
  });

  useEffect(() => {
    setTimeout(() => {
      setCounts((counts) => counts - 1);
    }, 1000);
  });

  return (
   <>
   
   <h1> Counts is </h1>
   <h1> Count is {counts} {count}</h1>

   <h1>My Color is {color}</h1>

   <input type="" onChange={(e) =>  setMy(e.target.value)} />
    <input type="" onChange={(y) => setEmail(y.target.value)} />
   

   <button type="" onClick={() => setColor("Blue")}>Blue</button>
   <button type="" onClick={() => setColor("Yellow")}>Yellow</button>
   <button type="" onClick={() => setColor("Green")}>Green</button>
   <button type="" onClick={() => setColor("Black")}>Black</button>
   

   <h1>{name}</h1>
   <h1>{email}</h1>
   
   </>
  );
}

export default App;
