import React, { useState } from 'react'

import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function CreateUser() {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const  [age,setAge] = useState()
  const navigate = useNavigate()

  // const [user,setUser] = useState({ name:'' , email: '' , age:''}) ; 
  // const {name,email,age} = user ; 


  const handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value}) ; 
  }

  // const handleSubmit = (e) =>{
  //   console.log("Form is submitted") ;
  
  //   console.log(user) ;
  //   e.preventDefault() ; 

  // }




 const Submit = (e) =>{
  e.preventDefault() ;
  axios.post("http://localhost:3001/createUser",{name,email,age})
  .then(result=>{
    console.log(result)
    navigate('/')
  })
  .catch(err =>console.log(err))
 }

  return (
    <article>
     <form onSubmit={Submit}>
      <div class="form-group container center_div">
        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
        <div class="col-md-4 col-md-offset-4">
          <input type="text" class="form-control" id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        </div>
      </div>
      <div class="form-group container center_div">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-md-4 col-md-offset-4">
          <input type="email" class="form-control" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
      </div>
      <div class="form-group container center_div">
        <label for="inputAge" class="col-sm-2 col-form-label">Age</label>
        <div class="col-md-4 col-md-offset-4">
          <input type="text" class="form-control" id="age" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
        </div>
      </div>
      <div>
        <button className='btn btn-success col-md-4 col-md-offset-4  ' >Submit</button>
      </div>
    </form>
  </article>
  )
}
