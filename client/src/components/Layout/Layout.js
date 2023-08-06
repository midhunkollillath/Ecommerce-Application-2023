import React from 'react'
import Header from "./Header.js"
import Footer from './Footer.js'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.css';
import {Toaster} from 'react-hot-toast'
function Layout({children,title,description,keywords,author}) {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8'/>
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords}/>
          <meta name='author' content={author}/>

        <title>{title}</title>
      </Helmet>
      <Header/>
      <main style={{minHeight:'80vh'}}>
       <Toaster/>
      {children}
      </main>
      <Footer/>
    </div>
  )
}
Layout.defaultProps ={
  title:'Shop-Now',
  keywords:'mern,react,node,mongo',
  description:'mern project',
  author:'midhun',
}
export default Layout