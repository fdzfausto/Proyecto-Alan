// src/pages/Shop.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Proteína Whey', price: 1500 },
  { id: 2, name: 'Guantes de Entrenamiento', price: 800 },
  { id: 3, name: 'Cinturón de Levantamiento', price: 1200 },
];

const Shop = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Tienda de Gimnasio Atila</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>

      <h3>Carrito de Compras</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Quitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
