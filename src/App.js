
import React, {useEffect, useState} from "react";
import "./button.css";

function App() {
 const [count,setCount]=useState(); 
 const [max,setMax]=useState();
useEffect(()=>{
  let val=prompt("Please enter intial value");
  if(val==null||val==="")
  {setCount(1);}
  else{
    setCount(parseInt(val));
  }
  let temp=prompt("Please enter the max value");
  console.log(temp,typeof(temp));
  if(temp==null||temp===""){
     setMax(1000);
  }
  else{
    setMax(parseInt(temp));
  }
},[]);

  function decrementCount(){
    setCount(prevCount=>prevCount-1);
    
  }
  function incrementCount(){
      if(count<max){
        console.log("ghi");
        setCount(prevCount=>prevCount+1);

      }
    };
  
  function change(e){
      if(e.target.value){
        setCount(parseInt(e.target.value));
      }
      else{
        setCount();
      }
      
  }
  return (
    <div className="App">
      <button onClick={decrementCount} className="decrement">-</button>
     
      <input value={count} onChange={(e)=>change(e)} className="counter">
      </input>
      <button onClick={incrementCount} className="increment">+</button>
      
    </div>
  );
  
}

export default App;

