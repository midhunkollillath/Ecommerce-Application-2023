import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

function Pagenotfount() {
  return (
    <Layout title='go-back'>
        <div className='pnf'>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>oops ! page not found</h2>
          <Link to='/' className='pnf-btn'>
            Go Back
          </Link>
        </div>

    </Layout>
  )
}

export default Pagenotfount