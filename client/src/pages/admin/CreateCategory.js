import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { toast } from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/form/CategoryForm";
import {Modal} from 'antd'
function CreateCategory() {
  //for form
  const [value,setValue] = useState('')
  const [visible,setVisible] = useState(false)
  const [selected,setSelected] = useState(null)
  const [updatedValue,setUpdatedValue] = useState('')
  //
  const [category, setCategory] = useState([]);
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category');
      console.log(data);
      if (data.success) {
        setCategory(data.category);

        
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in getting all category");
    }
  };
  //
  const handleSubmit= async(e)=>{
      e.preventDefault()
      try {
        console.log(value)
        const {data} = await axios.post('/api/v1/category/create-category',{value})
        if(data?.success){
          toast.success(`${value} is created`)
          getAllCategory()
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong in input form')
      }
  }
  const handleUpdated =async(e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.put(`/api/v1/category/update-category/${selected._id}`,{name:updatedValue})
      if(data?.success){
        toast.success(`${updatedValue} is created`)
        setSelected(null)
        setUpdatedValue('')
        setVisible(false)
        getAllCategory()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('something went wrong')
      
    }
  }
  const handledeleted =async(pid)=>{
    
    try {
      const {data} = await axios.delete(`/api/v1/category/delete-category/${pid}`)
      if(data?.success){
        toast.success(`deleted successfully`)
        setSelected(null)
        getAllCategory()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('something went wrong')
      
    }
  }
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <Layout title={"dashboard-category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="w-75">
              <div className="p-3 w-50">
                  <CategoryForm 
                  handleSubmit={handleSubmit}
                  value={value}
                  setValue={setValue}/>
              </div>
              <table className="table">
                <thead>
                  <tr>
                   
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                
                  {category?.map((row)=>(
                    <>
                    <tr>
                    <td key={row._id}>{row.name}</td>
                    <td>
                      <button className="btn btn-primary ms-2"
                      onClick={()=>{
                        setVisible(true);
                      setUpdatedValue(row.name);
                      setSelected(row);
                      }}>Edit</button>

                      <button className="btn btn-danger ms-2" onClick={()=>{handledeleted(row._id)}}>Delete</button>
                    </td>
                    </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal onCancel={()=>setVisible(false)} footer={null} open={visible}>
                    <CategoryForm  value={updatedValue} setValue={setUpdatedValue} handleSubmit={handleUpdated}/> 
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateCategory;
