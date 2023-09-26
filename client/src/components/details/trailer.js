import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../iframe/YoutubeEmbed";

const Trailer=()=>{
    const [data,setData]=useState({})
    let { id } = useParams();

    const url=`https://api.themoviedb.org/3/movie/${id}/videos`

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRjZmJiZDFkNGVkMDI0MmMxMjIwODdhYTBmZWE0MCIsInN1YiI6IjY0YzkwNzVmMWZhMWM4MDE1MTQ0ZDhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwz_Tq1TlLyBw0FpA5vOHLaZkAGYu9XJSJU9YsQBgS8'
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

    // {data.results?.map((vid)=>{
    //     console.log(vid.name);

    // })}

    return(
<div className="container-fluid ">
    <div className="row">
    <h1 className="mt-5">Teasers:</h1>
    </div>
    {data.results?.filter(a=>a.type==="Teaser").map((vid)=>(
         <div className="row mt-2 ">
<div className="col ">
<YoutubeEmbed  embedId={vid.key} />

</div>
         </div>
    )).slice(0,1)}
   

</div>    )
}
export default Trailer;