import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {  FaHeart } from "react-icons/fa";
import "./details.css"
import stateContext from "../stateContext/stateContext";





const About=(
    // {favorites,setFavorites}
    )=>{
    const [data,setData]=useState({})
    // const [passData,setpassData]=useState({})
    const {favs, getData} = useContext(stateContext);

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRjZmJiZDFkNGVkMDI0MmMxMjIwODdhYTBmZWE0MCIsInN1YiI6IjY0YzkwNzVmMWZhMWM4MDE1MTQ0ZDhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwz_Tq1TlLyBw0FpA5vOHLaZkAGYu9XJSJU9YsQBgS8'
    const navigate=useNavigate()


    let { id } = useParams();


    const url=`https://api.themoviedb.org/3/movie/${id}`
   
    useEffect(() => {
        axios.get(
            url,{headers: { Authorization: `Bearer ${token}` }}).then((response)=>{
            setData(response.data)
            console.log(response.data);
        }).catch((error)=>{
          if(error.response){
            console.log(error.response.data);
          }
       
        })
        
    },[])
    

    const handleClick=(id)=>{
        console.log(id);
        getData(id);
        navigate("/favs");

    }

   
   

    return(
        

<div className="container-fluid">
<div className="row">
    <div className="col-md-6 mt-3 ">
        <div className="row ">
        {data?<img className="w-100 shadow gx-0 ms-md-2 imgSize" src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}/>:null}
        </div>  
        <div className="row mt-4 ms-md-2 ">
        <h4 className=" favs " 
         onClick={(id)=>handleClick(data.id)}
        ><FaHeart className="me-2 mb-1 "/>Add to favorites</h4>

        </div>
    </div>
    <div className="col-md-6 mt-3 ">
        <div className="row ms-2 mt-4">
            <div className="row ">{data?<h1>{data.original_title}</h1>:null}</div>
            <div className="row">{data?<h5><em>{data.tagline}</em></h5>:null}</div>
            <div className="row ">
                <div className="col-1 ">{data?.adult===false?<h5>13+</h5>:<h5>18+</h5>}</div>
                <div className="col-11 d-flex justify-content-start">{data?data.genres?.map((genre,index,arr)=>(
                   <div className="row " > <p >{genre.name}{index!=arr.length-1?',':''}</p></div>
                )):null}</div>

                </div>
            <div className="row mt-5">
                <div className="col-lg-8">
                <h5>Overview</h5>
       {data?<p>{data.overview}</p>:null}
       </div>
       <div className="row ">{data?<p>Released:{data.release_date}</p>:null}</div>
       {/* <div className="row d-flex justify-content-start  ">
    <button className="btn  w-25 "><FaHeart className="me-2 mb-1 "/>Add to favorites</button>

       </div> */}

       </div>

       
       {/* <button onClick={()=>navigate("/home")} className="btn btin-light"><FaHeart className="me-2 mb-1"/>Add to favorites</button> */}
        </div>
       
   
       
    </div>
    

</div>
<div className="row"></div>

</div>

        )
}
export default About;



{/* <div className="col-6 mt-5 ">
<div className="row ">
{data?<img className="w-100 " src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}/>:null}
</div>
<div className="row mt-3">
{data?<p>{data.overview}</p>:null}
</div>
</div>
<div className="col-6 mt-5 ">
{data?<h1>{data.original_title}</h1>:null} 
{data?<h4>{data.tagline}</h4>:null}
<h5>Add to favorites</h5>

</div> */}