import React from 'react'
import './CustPortfolio.css'

export default function CustPortfolio() {
  return (
    <div className="custPortfolio">
      {/* content */}
        <table>
            <thead>
                    <tr>
                        <th>Company</th>
                        <th id='price'>Price</th>
                        <th>Buying Price</th>
                        <th>Quantity</th>
                        <th>Latest Price</th>
                        <th>Profit/Loss</th>
                        <th>Variation</th>
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
