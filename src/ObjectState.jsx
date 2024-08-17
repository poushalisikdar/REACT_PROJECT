import React from 'react'
import { useState } from 'react'

const ObjectState = () => {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 })
    let [arr, setArr] = useState(["blue"])

    let updateblue = () => {

        // setMoves((prevMoves) => {
        //     return { ...moves, blue: moves.blue + 1 }
        // })

        setArr((prevArr) => {
            return [...arr, "zero"]
        });


        console.log(arr)


    }

    let updateyellow = () => {
        console.log(`moves blue = ${moves.yellow}`)
        setMoves((prevMoves) => {
            return { ...moves, yellow: moves.yellow + 1 }

        })

    }

    let updategreen = () => {
        console.log(`moves blue = ${moves.green}`)
        setMoves({ ...moves, green: moves.green + 1 })

    }

    let updatered = () => {
        console.log(`moves blue = ${moves.red}`)
        setMoves({ ...moves, red: moves.red + 1 })

    }
    return (
        <div>
            <p>{arr}</p>
            <p>Blue Moves={moves.blue}</p>
            <button style={{ backgroundColor: "blue" }} onClick={updateblue}>+1</button>
            <p>Yellow Moves={moves.yellow}</p>
            <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateyellow}>+1</button>
            <p>Green Moves={moves.green}</p>
            <button style={{ backgroundColor: "green" }} onClick={updategreen}>+1</button>
            <p>Red Moves={moves.red}</p>
            <button style={{ backgroundColor: "red" }} onClick={updatered}>+1</button>
        </div>
    )
}

export default ObjectState
