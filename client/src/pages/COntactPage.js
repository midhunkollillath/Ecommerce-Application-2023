import React from 'react'
import Layout from '../components/Layout/Layout.js'
import {BiMailSend,BiPhoneCall,BiSupport} from 'react-icons/bi'
function COntactPage() {
  return (
    <Layout title='contact us'>
      <div className='row contactus'>
      <div className='col-md-6'>
        <img 
        src='/images/contactus.jpeg'
        alt='contacts'
        style={{width:'100%'}}/>
      </div>
      <div className='col-md-4'>
        <h1 className='bg-dark p-2 text-center'>CONTACT US</h1>
        <p className='text-justify mt-2'>
          any query and info about product feel free to call anytime we 24 X 7 available
        </p>
        <p className='mt-3'>
          <BiMailSend /> :www.help@ecommerceapp.com
        </p>
        <p className='mt-3'>
          <BiPhoneCall /> :0123456789
        </p>
        <p className='mt-3'>
          <BiSupport /> :1800-3334-576565
        </p>
      </div>
      </div>
    </Layout>
  )
}

export default COntactPage