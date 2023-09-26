import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Login/Login.css"


const Register=({setNewAcc})=>{
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

async function registerUser(event){
  event.preventDefault();
  const response=await fetch('http://localhost:1337/api/register',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      name,
      email,
      password
    })
  })

  const data=await response.json()
  console.log(data);

if(data.status==='ok'){
  // navigate('/')
  setNewAcc()
}

}



  return (
    <div className="container-fluid d-flex justify-content-center" >

      <div className="row rounded shadow  d-flex justify-content-center bg-white formLayout">
        
      <form className="col-12 col-sm-6  "  onSubmit={registerUser}>
        <div className="row mb-4 mt-3 ">
          <h1 className="d-flex justify-content-center">Create account</h1>
        </div>
        <div  className="row mt-4">
        <label  className="form-label">Name</label>
    <input 
      type="name"
     className="form-control"  
     value={name}
      onChange={(e)=>setName(e.target.value)}
        />
        </div>
      
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
       <button 
       className="btn btn-light rounded w-25">
      Register
       </button>
        </div>    
        <div className="row mt-1 mt-sm-3  ">
          <Link 
          onClick={setNewAcc}
          style={{color:"black"}}
          className="d-flex justify-content-center">OR login now</Link>
        </div>
     </form>
      </div>
      
    </div>
    
  );
}

export default Register;
