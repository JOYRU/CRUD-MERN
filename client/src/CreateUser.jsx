import React from 'react'

export default function CreateUser() {
  return (
    <article>
     <form>
      <div class="form-group container center_div">
        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-5 mb-2">
          <input type="name" class="form-control" id="name" placeholder="Name"/>
        </div>
      </div>
      <div class="form-group container center_div">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-5">
          <input type="email" class="form-control" id="email" placeholder="Email"/>
        </div>
      </div>
      <div class="form-group container center_div">
        <label for="inputAge" class="col-sm-2 col-form-label">Age</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" id="age" placeholder="Age"/>
        </div>
      </div>
      <div>
        <button className='btn btn-success container center_div col-sm-2  ' >Submit</button>
      </div>
    </form>
  </article>
  )
}
