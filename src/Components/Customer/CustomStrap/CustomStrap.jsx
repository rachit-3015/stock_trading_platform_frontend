import React, { useState, useEffect } from "react";
import "./CustomStrap.css";

export default function CustomStrap() {
  const [stockData, setStockData] = useState([]);
  const [position, setPosition] = useState(0);

  const symbols = ["TSLA", "AAPL", "MSFT", "NVDA","AVGO","ORCL","ADBE","CSCO"];
  useEffect(() => {
    const api = "";
    const fetchStockData = async () => {
      try { 
        const responses = await Promise.all(
          symbols.map((symbol) =>
            fetch(
              `https://api.twelvedata.com/price?symbol=${symbol}&interval=1min&apikey=${api}`
            )
          )
        );
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        console.log(data)
        setStockData(data);
      } catch (error) {
        console.error(error);
      }
  };

    fetchStockData();

    const intervalId = setInterval(() => {
      setPosition((position) => position - 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="moving-strap-container">
      <div
        className="moving-strap"
        style={{ transform: `translateX(${position}px)` }}
      >
        {stockData.map((stock, index) => (
          <div className="moving-strap-item" key={index}>
            <div className="moving-strap-symbol">{symbols[index]}</div>
            <div className="moving-strap-price">{stock.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
