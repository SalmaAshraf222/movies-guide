import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"



const Login=({setNewAcc})=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  const navigate = useNavigate()
  async function loginUser(event){
    event.preventDefault();
    const response=await fetch('http://localhost:1337/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email,
        password
      })
    })
  
    const data=await response.json()

    if(data.user){
      localStorage.setItem('token',data.user)
      alert('Login successful')
     navigate('/home')
    }else{
      alert('Please check username or password')
    }


    console.log(data);



  }

  




return (
    <div className="container-fluid d-flex justify-content-center" >

      <div className="row rounded shadow  d-flex justify-content-center  formLayout bg-white">
        
      <form className="col-12 col-sm-8 col-md-6  "  onSubmit={loginUser}>
        <div className="row mb-4 mt-3 ">
          <h1 className="d-flex justify-content-center">Log in now!</h1>
        </div>
        <br/>
        <div  className="row mt-4">
        <label  className="form-label">Email address</label>
    <input 
      type="email"
     className="form-control"  
     value={email}
      onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
        <br/>
        <div  className="row   ">
        <label  className="form-label">Password</label>
    <input 
    type="password" 
    className="form-control"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
        </div>
        <br/>
        <div  className="row  d-flex justify-content-center ">
       <button className="btn btn-light rounded w-25">
        Log in
       </button>
        </div>    
        <div className="row mt-5  ">
          <Link 
          onClick={setNewAcc}
          style={{color:"black"}}
          className="d-flex justify-content-center">OR click here to create an account</Link>
        </div>
     </form>
      </div>
      
    </div>
  );
}
export default Login