import { Icon } from '@iconify/react';
import {  FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./nav.css"

const Nav=({favorites})=>{
  const navigate=useNavigate()
    return(
<nav class="navbar navbar-expand-lg bg ">
  <div class="container-fluid gx-0 ">
    {/* <a class="navbar-brand" ><Icon style={{fontSize:"30px"}} icon="arcticons:huawei-movie"/></a> */}
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Register</a>
        </li> 
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/dashboard">Explore</a>
        </li>
         
          {/* <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="/favs"><FaHeart className="me-2 mb-1 "/></a>
        </li> 
            
      </ul> */}
      
      <FaHeart onClick={()=>navigate("/favs",{state:favorites})} className="me-5 mt-3 favPage" style={{fontSize:"30px"}}/>
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-light" type="submit">Search</button> */}
   
    </div>
  </div>
</nav>
    )
}
export default Nav;



   {/* <li class="nav-item">
          <a class="nav-link" href="/dashboard">Explore</a>
        </li>   
    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> 
        </li>*/}