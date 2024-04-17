
import React, { useState } from 'react';

const products = [
  { name: "Carrot", realPrice: 2.50, sellPrice: 3.00 },
  { name: "Tomato", realPrice: 1.80, sellPrice: 2.10 },
  { name: "Broccoli", realPrice: 1.90, sellPrice: 2.20 },
  { name: "Spinach", realPrice: 2.20, sellPrice: 2.60 }
];

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [totalProfit, setTotalProfit] = useState('');

  const filterBy = (type) => {
    let totalProfitValue = 0;
    const list = products.map(product => {
      let price, profit;
      if (type === 'sell') {
        price = product.sellPrice;
      } else if (type === 'real') {
        price = product.realPrice;
        profit = product.sellPrice - product.realPrice;
        totalProfitValue += profit;
      }

      return (
        <p key={product.name}>
          {type === 'sell' ? 
            `${product.name} - Price: $${price.toFixed(2)}` :
            `${product.name} - Main Price: $${price.toFixed(2)} - Profit: ${profit >= 0 ? '$' + profit.toFixed(2) : '-$' + Math.abs(profit).toFixed(2)}`
          }
        </p>
      );
    });

    setProductList(list);
    if (type === 'real') {
      setTotalProfit(`Total Profit: $${totalProfitValue.toFixed(2)}`);
    }
  };

  return (
    <div>
      <h1>Product Filter</h1>
      <button onClick={() => filterBy('sell')}>Sell Price</button>
      <button onClick={() => filterBy('real')}>Main Price</button>
      <br/><br/>
      <div id="productList">
        {productList}
      </div>
      <div id="totalProfit">
        {totalProfit}
      </div>
    </div>
  );
}
