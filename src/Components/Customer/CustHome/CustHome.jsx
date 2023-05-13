import React, { useState, useEffect } from "react";
import "./CustHome.css";
import { myAxios } from "../../../Service/Helper";

export default function CustHome() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await myAxios.get("/");
      console.log(response.data);
      setStockData(response.data);
    }
    fetchData();
  }, []);

  const handleRowClick = (symbol) => {
    window.location.href = `/meta-data/${symbol}`;
  };

  return (
    <div className="custHome">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th id="price">Price</th>
            <th>Change</th>
            <th>Chg%</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Prev</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((data, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(data.symbol)}
              style={{ cursor: "pointer" }}
            >
              <td>{data.symbol}</td>
              <td id="price">{data.price}</td>
              <td>{data.change}</td>
              <td>{data.percent_change}</td>
              <td>{data.open}</td>
              <td>{data.high}</td>
              <td>{data.low}</td>
              <td>{data.previous_close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
