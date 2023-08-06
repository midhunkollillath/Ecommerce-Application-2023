import React from 'react'
import { NavLink } from 'react-router-dom'
function AdminMenu() {
  return (
   <>
   <div className='text-center border border-primary'>
   <div className="list-group">
    <h4>Admin Panel</h4>

    <NavLink to="/dashboard/admin/create-category" 
    className="list-group-item list-group-item-action border border-primary">Create Category</NavLink>
    <NavLink to="/dashboard/admin/create-product " 
    className="list-group-item list-group-item-action border border-primary">Create Product</NavLink>
     <NavLink to="/dashboard/admin/product " 
    className="list-group-item list-group-item-action border border-primary">Products</NavLink>
    <NavLink to="/dashboard/admin/orders " 
    className="list-group-item list-group-item-action border border-primary">Orders</NavLink>
    <NavLink to="/dashboard/admin/users" 
    className="list-group-item list-group-item-action border border-primary">Users</NavLink>
 
</div>
   </div>
 
   </>
  )
}

export default AdminMenu