import React from 'react'
import { NavLink } from 'react-router-dom'

function UserMenu() {
  return (
    <div>
        <div className='text-center border border-primary'>
          <div className='list-group'>
             <h4>Dashboard</h4>
             <NavLink 
             to='/dashboard/user/profile'
             className='List-group-item list-group-item-action border border-primary'>
              Profile
             </NavLink>
             <NavLink 
             to='/dashboard/user/orders'
             className='List-group-item list-group-item-action border border-primary'>
              Orders
             </NavLink>
          </div>
        </div>
    </div>
  )
}

export default UserMenu