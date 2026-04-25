import React from 'react'
import List  from'../Components/List'
export default function Filter() {
 function movieSearch(event){
console.log('wiedehjjjhh')
 }
  return (
    <div>
        <div className="filter">
        <select className="movieFilter" onChange={(event) => movieSearch(event.target.value)}>
            <option defaultValue="selected" disabled>sort</option>
            <option value="movie Year">movie year, new__to__old </option>
            <option value="movieName">movie Name</option>   
        </select>
    </div> 
    </div>
  )
}
