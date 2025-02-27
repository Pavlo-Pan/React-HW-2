import React from 'react';
import Greeting from '../Greeting/Greeting';
import ShoppingList from '../ShoppingList/ShoppingList';
import OrderStatus from '../OrderStatus/OrderStatus';

function App() {

  const shoppingItems = ["Молоко", "Хлеб", "Яблоки"];
  //const shoppingItems = [];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 456, status: "обработан" },
  ];


  return (
    <div>
    <Greeting name="Павло" />
    <ShoppingList items={shoppingItems} />
    {orders.map(({ orderId, status }) => <OrderStatus key={orderId} orderId={orderId} status={status} />)}
  </div>
  )
}

export default App
