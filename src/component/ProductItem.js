import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

export function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];
  if (!shoe) return <h2>Product not found</h2>;
  return (
    <div>
      <h1>ProductItem</h1>
      <div className="link">
        <h3>{shoe.name}</h3>
        <img src={shoe.img} height={500} alt="shoe" />
      </div>
    </div>
  );
}
