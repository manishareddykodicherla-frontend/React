import React from 'react'

export default function Input() {
    function searchMovies(event){
        console.log(event.target.value)
    }
  return (
    <div><div className="search">
            <input type="text" placeholder="Search for a movie" className="searchingMovie"
             onInput={(event) => searchMovies(event)}/>
        </div>
        </div>
  )
}
