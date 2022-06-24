import React, { useState } from "react"
import Navbar from "./Navbar"



function Contact(props) {
  const [data,setdata]=useState({
    fullname:" ",
    phone:"",
    emai:"",
    message:"",
  })
  const InputEvent=(event)=>{
    const{name,value}=event.target;
    setdata((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })
  }
  const handleClick=(event)=>{
event.preventDefault();
alert(`${data.fullname}`)
  }
  return (
    <>
      <Navbar/>  
    <div className="my-5">
      <h1 className="text-center">
        Contact Us
      </h1>
  </div>
  <div className="container contact_div">
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={handleClick} >
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="fullname" value={data.fullname} onChange={InputEvent}/>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Phone</label>
<input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile number" name="phone" value={data.phone} onChange={InputEvent}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
</div> 
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
        </form>
      </div>

    </div>

  </div>
  </>
  );
}

export default Contact;