import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../style/ProductDetails.css";
const ProductDetails = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [product,setProduct] = useState({})
    const [relatedProduct,setRelatedProduct] = useState([])
    //initial details
    useEffect(()=>{
        if(params?.slug){
            getProduct()
        }
    },[params.slug])
    const getProduct = async()=>{
        try {
            const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`)
            setProduct(data?.product)
            getSimilarProduct(data?.product._id,data?.product.category._id)
        } catch (error) {
            console.log(error)

        }
        
    }
   const getSimilarProduct = async(pid,cid)=>{
    try {
         const {data} = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)

         setRelatedProduct(data?.products)
    } catch (error) {
        console.log(error)
    }
   }

  return (
   <Layout>
    <div className='row container mt-2 product-details'>
            <div className='col-md-6'>
            <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name} height={'300px'} width={'350px'}
                  />
            </div>
            <div className='col-md-6'>
               <h1 className='text-center'>Product Details</h1>    
               <h6>Name:{product.name}</h6>       
               <h6>Description:{product.description}</h6>    
               <h6>Price:{product.price}</h6>    
               <h6>Quantity:{product.quantity}</h6>    
               <h6>Category:{product.category?.name}</h6>    
               <button className='btn btn-secondary ms-1' >ADD TO CART</button>
   
            </div>
            
            <div className='row'>
              {relatedProduct.length<1 ? (<p className='text-center'>
                No Such Products
              </p>):(
                <>
                <h1>Similar Products</h1>
                <div className="d-flex flex-wrap">
                {relatedProduct?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p?.description?.substring(0, 30)}
                  </p>
                  <p className="card-text"> $ {p.price}</p> 
                  <button className="btn btn-secondary ms-1" >ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
          </>
          )}
            </div>
    </div>
   </Layout>
  )
}

export default ProductDetails