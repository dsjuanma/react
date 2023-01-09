import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function ItemList({ productos }) {
  return (
    <div className="flex">
      {productos.map((producto) => {
        let idGenerada = uuidv4();
        return (
          <Link to={`/detail/${producto.name}`}>
            <Item key={producto.name} producto={producto} />
          </Link>
        );
      })}
    </div>
  );
}

export default ItemList;
