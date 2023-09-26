import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"
import { useNavigate} from 'react-router-dom'
import Movielist from "../components/movieList/movieList";
import Nav from "../components/Navbar/navbar";


const Dashboard=()=>{
// const navigate=useNavigate()





// useEffect(()=>{
// const token = localStorage.getItem('token')
// if(token){
//     const user=jwt_decode(token)
//     console.log(user)
//     if(!user){
//         localStorage.removeItem('token')
//         navigate('/login')
//     }else{
//       console.log(user)
//     }
// }
// console.log("works");
// },[])

// async function updateQuote(event){
//     event.preventDefault()
//     const req=await fetch('http://localhost:1337/api/quote',{
//     method:'POST',    
//     headers:{
//         'Content-Type':'application/json',
//         'x-access-token':localStorage.getItem('token'),
//         },
//         body:JSON.stringify({
//             quote:tempQuote
//         })
//     })

// const data=await req.json()
// if(data.status==='ok'){
//     setQuote(tempQuote)
//     setTempQuote('')
// }else{
//     alert(data.error)
// }
// }

return(
    <div>
         <Nav/>
<Movielist/>  
 
    </div>
)


}
export default Dashboard