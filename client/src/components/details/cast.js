import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/pagination";

const Cast=()=>{
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  
  
    const [data,setData]=useState({})
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRjZmJiZDFkNGVkMDI0MmMxMjIwODdhYTBmZWE0MCIsInN1YiI6IjY0YzkwNzVmMWZhMWM4MDE1MTQ0ZDhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwz_Tq1TlLyBw0FpA5vOHLaZkAGYu9XJSJU9YsQBgS8'
    let { id } = useParams();

    const url=`https://api.themoviedb.org/3/movie/${id}/credits`

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

    {data.cast?.map(actor=>{
        // console.log(actor.name);

    })}

    return(
        <div className="container-fluid ">
      <div className="row mt-5">              
              <h1>Cast:</h1>
</div>

      <div className="row mt-2 d-flex justify-content-evenly"> 
{data.cast?.map(actor=>(
    // <div className="row mt-5  d-flex justify-content-around">
        <div className="col ">
         <img className=" gx-0 rounded"  src={`https://image.tmdb.org/t/p/w1280/${actor.profile_path}`} style={{width:"150px",height:"150px"}}/>
    <p>{actor.name}</p>
    </div>
    //    {/* </div> */}
  
)).slice(0,16)} 
 
        </div>
        </div>
   )
}
export default Cast;

