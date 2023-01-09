import React,{useState, useEffect} from "react";
import "./ItemListContainer.css";
import {arrayProductos} from "../../data.js"
import ItemList from "../ItemList/ItemList";
import ReactLoading from 'react-loading';
 

function ItemListContainer() {
  
  const [productos, setProductos] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {    
    setLoading (true)
    promise.then((data) =>  setProductos (data))
    setLoading (false)
  }, [])

  const promise = new Promise ((resolve,reject) => {
    
    setTimeout (() => {
      resolve (arrayProductos)
     
    }, 3500)
  })

  return (
    <div className="ItemListContainer">
      <div>ItemListContainer</div>
      {
        loading && <ReactLoading type={"balls"} color={"white"} height={100} width={100} />
      }
     
      <ItemList productos = {productos}/>
    </div>
  );
}

export default ItemListContainer;
