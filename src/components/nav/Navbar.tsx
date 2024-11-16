import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-50 p-2 h-full w-64'>
      <ul>
        <li><a href='overview' className='nav-link'>
          Dashboard Overview</a>
        </li>
        <li><a href='revenue' className='nav-link'>
          Revenue
        </a></li>
        <li><a href='orders' className='nav-link'>
          Orders
        </a></li>
        <li><a href='products' className='nav-link'>
          Products
        </a></li>
        <li><a href='customers' className='nav-link'>
          Customer Insights
        </a></li>
        <li><a href='traffic' className='nav-link'>
          Traffic Sources
        </a></li>
        <li><a href='geographic' className='nav-link'>
          Geographic Insights
        </a></li>
        <li><a href='settings' className='nav-link'>
          Settings
        </a></li>
      </ul>
    </nav>
  )
}

export default Navbar
