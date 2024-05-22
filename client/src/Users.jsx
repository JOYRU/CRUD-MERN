import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom" ;

export default function Users() {
    const [users,setUsers] = useState([{
        Name : "joy" , Email:"jou@gmail.com" , Age: 20
    }])

  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id)=>{
    alert("Are You Sure Delete This Item") ; 
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res=>
      {console.log(res)
      window.location.reload()
      })
    .catch(err=>console.log(err))

  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
      <Link to='/create' className="btn btn-success">Add+</Link>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    
      {
        users.map((user)=>{
          return  <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                <Link to={'/update/'+user._id} className='btn btn-success'>Update</Link>
                </td>
               

                <td><button className='btn btn-danger' onClick = {(e) => handleDelete(user._id)}>Delete</button></td>
            </tr>
        })
      }
     

  </tbody>
</table>
      </div>
    </div>
  )
}
