import React from 'react'
import { useState } from 'react'

const State = () => {
   let [count,setcount] = useState(0)

   let incCount = ()=>{
    setcount(count+1)
   };
  return (
    <div>
        <h3>count= {count}</h3>
      <button onClick={incCount}> click me!</button>
    </div>
  )
}

export default State
