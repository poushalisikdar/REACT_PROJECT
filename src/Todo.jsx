import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {

    let [arr, setArr] = useState([{ task: "code", id: uuidv4(), isDone: false }])
    let [newtodo, setNewtodo] = useState([""]);

    let updatevalue = (event) => {
        setNewtodo(event.target.value);


    }
    let addValue = () => {
        setArr((prevtodo) => {
            return [...arr, { task: newtodo, id: uuidv4(),isDone:false }]

        });
        setNewtodo("");


    };

    let deletetodo = (id) => {
        setArr(arr.filter((task) => task.id != id))
    }
    let markasDone = () => {
        setArr(
            arr.map((todo) => {
                return {
                    ...todo,
                  isDone:true
                };
            })
        );
    };

    let updateOne = (id) => {
        setArr(
            arr.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo
                }
            })
        );
    }
    let donetask = (id)=>{
       setArr(
        arr.map((todo)=>{
            if(todo.id == id){
                return{
                    ...todo,
                    isDone:true,
                };
            }else{
                return todo
            }
        })
        
       )
    }


    return (
        <div>
            <h1> Hey Welcome ! </h1>
            <h3>Let's start to manage your task</h3>
            <input className='input' type="text" placeholder='Add tour task' value={newtodo} onChange={updatevalue} />
            
            <button onClick={addValue}>Add</button>
           
            <h3 className='h3'>Task List</h3>
            
            <ul>

                {
                    arr.map((todo) => (
                        <li key={todo.id}> <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}
                        >{todo.task}</span> &nbsp; &nbsp;
                            <button onClick={() => deletetodo(todo.id)}>delete</button> &nbsp;&nbsp;
                           
                            <button onClick={()=>donetask(todo.id)}>Done</button>
                        </li>
                    ))
                }

            </ul>
            <br />
            
           
            {/* <button className='markdone' onClick={markasDone}>Mark Done</button> */}
        </div>

    )
}

export default Todo
