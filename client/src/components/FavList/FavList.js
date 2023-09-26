import {  createContext,useContext } from "react";
import stateContext from "../stateContext/stateContext";
import {  FaStar } from "react-icons/fa";


const FavList=()=>{
    
const {favs,setFavs} = useContext(stateContext);
console.log(favs);

const removeData=(movieId)=>{
    setFavs(favs.filter((a)=>a.id!==movieId))
    console.log("here",movieId)
  }

    return(
        <div className='d-flex align-content-between flex-wrap justify-content-center gx-5 mt-3'>
        {favs.length>0?favs.map((movie)=>(
            <div className="card" style={{width: "18rem"}}>
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
                          onClick={()=>removeData(movie.id)}
                         >Remove</button>
                    </div>
                        
                </div>
                </div>

))

:<h1>List is empty</h1>}
</div>       
    )
}
export default FavList;