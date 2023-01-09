import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { arrayProductos } from "../../data.js";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const { id } = useParams(); 
  useEffect(() => {
    promise.then((data) => setProducto(data));
  }, []);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let productoFiltrado = arrayProductos.find((item) => item.name == id);      
      resolve(productoFiltrado);
    }, 2000);
  });

  return (
    <div className="ItemListContainer">
      <div>ItemListContainer</div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
