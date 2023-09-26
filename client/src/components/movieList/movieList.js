import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  FaStar } from "react-icons/fa";
import "./movieList.css"

const Movielist=()=>{
    const [data,setData]=useState({})
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRjZmJiZDFkNGVkMDI0MmMxMjIwODdhYTBmZWE0MCIsInN1YiI6IjY0YzkwNzVmMWZhMWM4MDE1MTQ0ZDhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwz_Tq1TlLyBw0FpA5vOHLaZkAGYu9XJSJU9YsQBgS8'
    const navigate=useNavigate()

    const url=`https://api.themoviedb.org/3/discover/movie`


    useEffect(() => {
        axios.get(url,{headers: { Authorization: `Bearer ${token}` }}).then((response)=>{
            setData(response.data)
            console.log(response.data);
        }).catch((error)=>{
          if(error.response){
            console.log(error.response.data);
            // setErr(error.response.data.message)
          //   alert(`Error:${error.response.data.message}`)
          }
        })

            //    setMovies(data)

    },[])
   
  

    return(
        <div className='d-flex align-content-between flex-wrap justify-content-center gx-5 mt-3'>
            {data.results?.map((movie)=>{
               return( <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt="Card image cap"/>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className='row'>
                        <h5 className="card-title">{movie.title}</h5>
                        </div>
                        <div className='row'>
                        <p>{movie.vote_average}<FaStar className='mb-1 ms-1'/></p>
                        </div>
                        <div className='row   d-flex justify-content-end'>
                        <button className='btn btn-light w-50 me-3 moreBtn' 
                             onClick={()=>navigate(`/details/${movie.id}`)}>Learn more</button>
                        </div>
                            
                    </div>
                    </div>)
            })}
        </div>
        
      
    )
}
export default Movielist



  {/* <div>
            {data.results?.map((movie)=>
            <h1>{movie.title}</h1>
            )}
        </div> */}