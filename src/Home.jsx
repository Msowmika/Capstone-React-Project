import { useState } from "react";
import "./index.css"
import image  from "./image 13.jpg";

function Home(){
    const[data,setData]=useState({
        name:"",
        username:"",
        email:"",
       mobile:"",
       checkbox:false
    })
   const[errors,setErrors]=useState({
        name:"",
        username:"",
        email:"",
       mobile:"",
       checkbox:""
   })
    const handleInput=(e)=> {
    setData({
        ...data,
        [e.target.name] : e.target.name === "checkbox" ? e.target.checked : e.target.value,
    })
}; 
const handleSubmit=(e)=>{
    e.preventDefault()
    let errors={}
    if(!data.name || data.name.trim()===""){
        errors.name="Name is Required"
    }
    if(!data.username || data.username.trim()===""){
        errors.username="Username is Required"
    }
    if(!data.email || data.email.trim()===""){
        errors.email="Email is Required"
    }
    if(!data.mobile || data.mobile.trim()===""){
        errors.mobile="Mobile is Required"
    }
    if(!data.checkbox){
        errors.checkbox="Checkbox is Required"
    }
    setErrors(errors)
    if(Object.keys(errors).length>0) return
    else{
        alert("Form submitted succesfully")
        localStorage.setItem("userData",JSON.stringify(data))
        setData({
            name:"",
            username:"",
            email:"",
           mobile:"",
           checkbox:false
        })
    }
        
}  
    return(
        <>
        <div className="container">
        <img src={image} alt=""></img>
        <h1 id="head">Discover new things on Superapp</h1>
 <form onSubmit={handleSubmit} style={{backgroundColor:"black"}}><h1 className="head1">Super app</h1><p className="para1">Create your new account</p>
  
<input type="text" name="name" placeholder=" Name" value={data.name} onChange={handleInput}/>
<span style={{color:"red"}}>{errors.name}</span>
<input type="text" name="username" placeholder=" Username" value={data.password} onChange={handleInput}/>
<span style={{color:"red"}}>{errors.username}</span>
<input type="email" name="email" placeholder=" Email" value={data.email} onChange={handleInput}/>
<span style={{color:"red"}}>{errors.email}</span>
<input type="tel" name="mobile" placeholder=" Mobile" value={data.mobile} onChange={handleInput}/>
<span style={{color:"red"}}>{errors.mobile}</span>
<div className="checkbox"><input type="checkbox" name="checkbox" id="checkbox" checked={data.checkbox} onChange={handleInput} /><label htmlFor="checkbox">Share my registration data with Superapp</label></div>
<span style={{color:"red"}}>{errors.checkbox}</span>
<button type="submit">Submit</button>
<div className="para">
<p >By clicking on Sign up. you agree to Superapp <span style={{color:"green"}}>Terms and Conditions of Use</span></p>
<p >To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:"green"}}>Privacy Policy</span></p>
</div>
 </form>
 </div>
        </>
    )
}

export default Home;