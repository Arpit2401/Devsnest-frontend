import {arr} from '../../assests/memestock'
import Card from './Card/Card'
import React from 'react'
import './Cards.css'

function Cards(){
    return(
        <div className="cards">
        {
        arr.map((ele, ind) => {
            return <Card
            key={ind} link={ele}/>
        })
        }
        </div>
    )
}

export default Cards
