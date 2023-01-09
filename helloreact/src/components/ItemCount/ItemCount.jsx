import React from 'react'
import "./ItemCount.css"

function ItemCount({stock,initial}) {
    const [contador, setContador] = React.useState(initial)

    function handleSuma(){
        if(contador<stock){
            setContador(contador+1)
        }
    }
    function handleResta(){
        if(contador>0){
            setContador(contador-1)
        }
    }

  return (
    <div>
        <h1>
            {contador}            
        </h1>
        <button onClick={handleResta}>-</button>
        <button onClick={handleSuma}>+</button>
    </div>
  )
}

export default ItemCount