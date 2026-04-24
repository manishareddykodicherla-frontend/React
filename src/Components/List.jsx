import React, { useEffect } from 'react'
import { useState, useEf } from 'react'

export default function List() {
const movies=`https://www.omdbapi.com/?i=tt3896198&apikey=9a6c4194&s=movie`
const [data, setData] = useState([]);
useEffect(()=>{
    const fetchData=async()=>{
    const response= await fetch(movies);
    const data=await response.json();
    setData(data.Search);
    }
    fetchData();
    console.log(data);
},[]
)
  return (
    <div>
         <div className="movie__lists">
        <div  id='movies'className="movie__list">
    <figure className="movieImage">
        <img src={data.Poster} className="movielogo"/>
    </figure>
    <h2  id= '#tickets' className="moviePrice">MoviePrice</h2>
    <h4 className="name">MovieName</h4>
    <h4 className="Year">Year</h4>
    <h4 className="imdb">IMDB</h4>
   </div>
        </div>
    </div>
  )
}
