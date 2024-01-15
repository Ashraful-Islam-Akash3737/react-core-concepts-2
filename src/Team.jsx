import { useState } from "react"

export default function Team(){
    const [player, setPlayer] = useState(11);

    const teamStyle = {
        border: "2px solid red",
        margin: "15px",
        padding: "15px",
        borderRadius: "10px"
    }
    const addPlayer = () =>{
        const totalPlayer = player + 1;
        setPlayer(totalPlayer)
    }
    const removePlayer = () =>{
        const totalPlayer = player - 1;
        setPlayer(totalPlayer)
    }
    return(
        <div style={teamStyle}>
            <h3>Player: {player}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}