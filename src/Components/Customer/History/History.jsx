import React from 'react'
import './History.css'

export default function History() {
  return (
    <div className="histroy">
      <table>
        <thead>
            <tr>
                <th>Company</th>
                <th id='rate'>Buying Price</th>
                <th>Selling Price</th>
                <th>Quantity</th>
                <th>Profit/Loss</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
