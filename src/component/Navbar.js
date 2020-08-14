import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/product">Product</Link>
    </div>
  );
}
