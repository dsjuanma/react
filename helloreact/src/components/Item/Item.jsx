import React from 'react'
import "./Item.css"

function Item({producto}) {
  return (
    <div className='card'>
        <h2>{producto.name}</h2>      
        <img src={producto.image}></img> 
        <br />
        <strong>${producto.price}</strong>     
    </div>
    
  )
}

export default Item