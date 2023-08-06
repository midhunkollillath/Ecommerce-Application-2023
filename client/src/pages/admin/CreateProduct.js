import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import {Select} from 'antd'
const {Option} = Select
function CreateProduct() {
  const navigate = useNavigate()
  const [category,setCategory] = useState('')
  const [categories,setCategories] = useState([])
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')
  const [quantity,setQuantity] = useState('')
  const [shipping,setShippping] = useState('')
  const [photo,setPhoto] = useState('')
  //handlecreate()
  const handleCreate=async(e)=>{
      e.preventDefault()
      try {
        const productData = new FormData()
        productData.append('name',name)
        productData.append('description',description)
        productData.append('price',price)
        productData.append('quantity',quantity)
        productData.append('photo',photo)
        productData.append('category',category)
        const {data} = axios.post('/api/v1/product/create-product',productData)
        if(data?.success){
         
        }else{
          toast.success('Product Created sucessfully')
          navigate('/dashboard/admin/product')
        }
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
      }
  }
  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category');
      console.log(data);
      if (data?.success) {
        setCategories(data?.category);  
      }
      
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in getting all category");
    }
  };
  // console.log(categories)
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <Layout title={'dashboard-products'}>
      <div className='container-fluid m-3 p-3'>
      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu/>
        </div>
        <div className='col-md-9'>
            <h1>Create Product</h1>
            <div className='m-1 w-75'>
                <Select bordered={false} placeholder='Select a Category'
                size='medium'
                showSearch className='form-select mb-3'
                onChange={(value)=>{setCategory(value)}}>
                  {categories?.map((c)=>
                    (
                      <Option key={c._id} value={c._id}>
                        {c.name}
                      </Option>
                    )
                  )}

                </Select>
                <div className='mb-3'>
                  <label className='btn btn-outline-primary col-md-12'>
                     {photo? photo.name:'Upload Photo'}
                 
                      <input type='file' name='photo' 
                      accept='/image/*'
                      onChange={(e)=>setPhoto(e.target.files[0])}
                      hidden
                      />
                       </label>
                </div>
                <div className='mb-3'>
                      {photo &&(
                        <div className='text-center'>
                          <img
                          src={URL.createObjectURL(photo)}
                          alt='product'
                          height={'200px'}
                          className='img img-responsive'
                          />
                        </div>
                      )}
                </div>
                <div className='mb-3'>
                        <input
                        type='text'
                        value={name}
                        placeholder='write a Name'
                        className='form-control'
                        onChange={(e)=>setName(e.target.value)}
                        />
                </div>
                <div className='mb-3'>
                        <input
                        type='text'
                        value={description}
                        placeholder='write a description'
                        className='form-control'
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                </div>
                <div className='mb-3'>
                        <input
                        type='text'
                        value={price}
                        placeholder='write a price'
                        className='form-control'
                        onChange={(e)=>setPrice(e.target.value)}
                        />
                </div>
                <div className='mb-3'>
                        <input
                        type='text'
                        value={quantity}
                        placeholder='write a quantity'
                        className='form-control'
                        onChange={(e)=>setQuantity(e.target.value)}
                        />
                </div>
                <div className='mb-3'>
                       <Select
                       bordered={true}
                       placeholder='select shipping'
                       size='large'
                       showSearch
                       className='form-select mb-3'
                       onChange={(value)=>{
                        setShippping(value)
                       }}>
                        <Option value='0'>No</Option>
                        <Option value='1'>Yes</Option>
                       </Select>

                       
                </div>
                <button className='btn btn-primary' onClick={handleCreate}>Create Product</button>
            </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default CreateProduct