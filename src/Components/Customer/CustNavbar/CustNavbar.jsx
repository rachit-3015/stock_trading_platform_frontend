import React, { useEffect, useState } from 'react'
import './CustNavbar.css'
import { Link } from 'react-router-dom'
import { NavbarSearch } from '../../../Service/Utility'


export default function CustNavbar() {
  const [search,setSearch] = useState({
    search : ""
  })  

  useEffect(()=>{
    console.log(search)
  })

  const handleSearch=(event)=>{
    setSearch(event.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    /*Searchbox data sending to backend*/
    NavbarSearch(search).then((response)=>{
      console.log(response)
      console.log("Search success")
    }).catch((error)=>{
      console.log(error)
      console.log("Search fail")
    })
  }


  return (
    <div>
      <div className="navbar">

        {/* Searchbar */}
        <div className="search">
          <form className='formTag' onSubmit={handleSubmit}>
            <input type="search" placeholder="--search stocks here--" onChange={(e)=>handleSearch(e,"search")} />
            <button type="submit">Search</button>
          </form>
        </div>

        {/* attributes */}
        <div className="list">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/addMoney'>Add Money</Link></li>
            <li><Link to='/myPortfolio'>My Portfolio</Link></li>
            <li><Link to='/myWatchlist'>My Watchlist</Link></li>
            <li><Link to='/trade'>Trade</Link></li>
            <li><Link to='/history'>History</Link></li>
            <li><Link to='/forum'>Forum</Link></li>
            <li><Link to='/signIn'>Sign Up</Link></li>
            {/* <li><a href='#'>Add Stock</a> </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}
