import React from 'react'
import { useState } from 'react'

const Likebutton = () => {
let styles={
  textAlign:"center",
  marginLeft:"8rem",
  fontSize:"5rem",
}
let redheart = {
  color:"red",
} 
let [color,setcolor]=useState(false);

let changeColor = ()=>{
 setcolor(!color)

}

  return (
    <div>
   
      <p  style={styles}>"Dedicated to MAA " </p>
     
      <p style={styles}  onClick={changeColor}>
        {
          color?(<i style={redheart} className="fa-solid fa-heart "></i>):(<i className="fa-regular fa-heart"></i>)
        }
        
         </p>
    </div>
  )
}

export default Likebutton
