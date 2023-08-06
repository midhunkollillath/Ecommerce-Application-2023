import React, { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/UserMenu'
import { useAuth } from '../../context/auth'
import { json } from 'react-router-dom'

const Profile = () => {
  //auth
  const [auth,setAuth] = useAuth()

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //get user data
  useEffect(()=>{
    const {email,name,phone,address} = auth?.user
    setAddress(address)
    setName(name)
    setEmail(email)
    setPhone(phone)
  },[auth?.user])
  //function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
       
      });
    if(data?.error){
      toast.error(data?.error)
    }else{
      setAuth({...auth,user:data?.updatedUser})
      let ls = localStorage.getItem('auth')
      ls = JSON.parse(ls)
      ls.user = data.updatedUser
      localStorage.setItem('auth',JSON.stringify(ls))
      toast.success('Profile updated successfully')
    }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title='Profile'>
         <div className='container-fluid p-3 m-3'>
          <div className='row'>
            <div className='col-md-3'>
                <UserMenu/>
            </div>
            <div className='col-md-9'>
                <div className='form-container'>
                <form onSubmit={handleSubmit}>
          <h4 className="title">User Update</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
             
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              
              disabled
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
         
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
             
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
                </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Profile