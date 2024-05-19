// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
    const interval=setInterval(()=>{
      setCount((prevCount)=>{
        if(prevCount<10){
          return prevCount + 1
        }else{
          clearInterval(interval)
          return prevCount
        }
      })
    },1000)
    return ()=>clearInterval(interval)
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
