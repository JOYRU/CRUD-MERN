import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'



export default function UpdateUser() {
  const {id} = useParams() 
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const  [age,setAge] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result=>
      {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)

      })
    .catch(err=>console.log(err))
  },[])

  return (
    <article>
     <form>
      <h2>Update User</h2>
      <div class="form-group container center_div">
        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
        <div class="col-md-4 col-md-offset-4">
          <input type="text" class="form-control" id="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
      </div>
      <div class="form-group container center_div">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-md-4 col-md-offset-4">
          <input type="email" class="form-control" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
      </div>
      <div class="form-group container center_div">
        <label for="inputAge" class="col-sm-2 col-form-label">Age</label>
        <div class="col-md-4 col-md-offset-4">
          <input type="text" class="form-control" id="age" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </div>
      </div>
      <div>
        <button className='btn btn-success col-md-4 col-md-offset-4  ' >Submit</button>
      </div>
    </form>
  </article>
  )
}
