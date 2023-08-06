import React from 'react'
import { useSearch } from '../../context/search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SearchInput = () => {
    const [value,setValue] = useSearch()
    const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
            console.log(value.keyword)
            const {data} = await axios.get(`/api/v1/product/search/${value.keyword}`)
            setValue({...value,result:data})
            navigate('/search')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form className='d-flex' role='search' onSubmit={handleSubmit}>
                <input
                className='form-control me-2'
                type='search'
                placeholder='search'
                aria-label='search'
                value={value.keyword}
                onChange={(e)=>setValue({...value,keyword:e.target.value})}
                />
                <button className='btn btn-outline-success' type='submit'>
                    Search
                </button>
        </form>
    </div>
  )
}

export default SearchInput