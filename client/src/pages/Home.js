import { useNavigate } from "react-router-dom";
import Nav from "../components/Navbar/navbar";
import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import "../components/Login/Login.css"
import bg from "../assets/movieBg.jpeg"

const Home=()=>{
    const navigate = useNavigate();
    const [newAcc,setNewAcc]=useState("no")


    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const user=jwt_decode(token)
        console.log(user)
        if(!user){
            localStorage.removeItem('token')
            navigate('/login')
        }else{
          console.log(user)
        }
    }
    console.log("works");
    },[])

    return(
        <div className="container-fluid "
        style={{
            height:"100vh",
            backgroundImage: `url(${bg})`,
           backgroundPosition: "center top",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           loading: "lazy",
        }}
        >
            
      <div className="row d-flex justify-content-center"
      style={{backdropFilter:"blur(8px)"}}>
            <div className="row mt-5">
                <h2 className="d-flex justify-content-center animate-charcter"><b>Welcome to your movie guide, where you can find all of your fav movies!</b></h2>
            </div>
            <div className="row mt-3"
            >
               {
                newAcc==="no"?
                <Login setNewAcc={()=>setNewAcc("yes")}/>
                :  <Register setNewAcc={()=>setNewAcc("no")}/> 
               }
               
               
            </div>
      </div>
           

        </div>
      
    )
}
export default Home;