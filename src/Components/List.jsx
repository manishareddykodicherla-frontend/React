import React, { useEffect } from 'react'
import { useState } from 'react'

export default function List() {
const movies=`https://www.omdbapi.com/?apikey=9a6c4194&s=movie`
const [data, setData] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(movies);
      const result = await response.json();
      setData(result.Search || []);
    };

   fetchData();
  }, []);
  return (
    <div>
         <div className="movie__lists">
            {data.map((movie)=>(
        <div  key={movie.imdbID}className="movie__list">
    <figure className="movieImage">
        <img src={movie.Poster} className="movielogo"/>
    </figure>
    <h2  id= '#tickets' className="moviePrice">{movie.Type}</h2>
    <h4 className="name">{movie.Title}</h4>
    <h4 className="Year">{movie.Year}</h4>
    <h4 className="imdb">{movie.imdbID}</h4>
   </div>))}
            
        </div>
        
        
    </div>
  )
}
