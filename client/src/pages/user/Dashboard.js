import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/UserMenu'
import { useAuth } from '../../context/auth'
function Dashboard() {
  const [auth] = useAuth()

  return (
    <Layout title={'Dashboard - Ecommerce-App'}>
       <div className='container-fluid p-3 m-3'>
          <div className='row'>
              <div className='col-md-3'>
                  <UserMenu/>
              </div>
              <div className='col-md-3'>
                 <div className='card w-100 p-3'>
                    <h3>{auth?.user?.name}</h3>
                    <h5>{auth?.user?.email}</h5>
                    <h5>{auth?.user?.address}</h5>
                    <h5>{auth?.user?.phone}</h5>
                 </div>
              </div>
          </div>
       </div>
    </Layout>
  )
}

export default Dashboard