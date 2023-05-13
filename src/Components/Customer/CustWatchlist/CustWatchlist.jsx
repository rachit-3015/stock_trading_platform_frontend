import React from 'react'
import './CustWatchlist.css'

export default function CustWatchlist() {
  return (
    <div className="custWatchlist">
      {/* content */}
        <table>
            <thead>
                    <tr>
                        <th>Company</th>
                        <th id='price'>Price</th>
                        <th>Change</th>
                        <th>Chg%</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Prev</th>
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
