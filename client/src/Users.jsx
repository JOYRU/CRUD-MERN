import React, { useState } from 'react'
import {Link} from "react-router-dom" ;

export default function Users() {
    const [users,setUsers] = useState([{
        Name : "joy" , Email:"jou@gmail.com" , Age: 20
    }])
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
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        })
      }
     

  </tbody>
</table>
      </div>
    </div>
  )
}
