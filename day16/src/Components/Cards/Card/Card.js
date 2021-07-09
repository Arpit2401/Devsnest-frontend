import React from 'react'
import './Card.css'

function Card(props){
    return(
        <div className="card">
            <img src={props.link} alt="Meme"/>
        </div>
    )
}

export default Card