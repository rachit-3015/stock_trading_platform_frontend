import React from 'react'
import './CustTrade.css'

export default function CustTrade() {
  return (
    <div className="custTrade">
      {/* content */}
        <table>
            <thead>
                    <tr>
                        <th className="name">Company</th>
                        <th className="value">Current Price</th>
                        <th>For buy/sell</th>
                        <th>Price</th>
                        <th>Quantity</th>

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
                        <td></td>
                    </tr>
                </tbody>
        </table>
    </div>
  )
}
