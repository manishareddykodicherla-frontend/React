import React, { useEffect } from 'react'
import { useState, useEffect } from 'react'

export default function List() {
const movies=`https://www.omdbapi.com/?apikey=9a6c4194&s=movie`
const [data, setData] = useState([]);
useEffect(() => {
  console.log(data);
}, [data])
  return (
    <div>
         <div className="movie__lists">
            {
            data.map((movie))=>(
        <div  key={movie.imdbID}className="movie__list">
    <figure className="movieImage">
        <img src={movie.Poster} className="movielogo"/>
    </figure>
    <h2  id= '#tickets' className="moviePrice">{movie.Price}</h2>
    <h4 className="name">{movie.Name}</h4>
    <h4 className="Year">{movie.Year}</h4>
    <h4 className="imdb">{movie.IMDB}</h4>
   </div>)
        </div>
  
    </div>
  )
}
