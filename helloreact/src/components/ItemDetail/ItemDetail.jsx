import React from "react";
import "./ItemDetail.css";

function ItemDetail({ producto }) {
  return (
    <div>
      <h2>{producto.name}</h2>
      <img src={producto.image}></img>
      <p>{producto.details}</p>
      <br />
      <strong>${producto.price}</strong>
    </div>
  );
}

export default ItemDetail;
