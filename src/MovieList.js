import React, { useEffect, useState } from 'react'
import Movie from './Movie'

export default function MovieList() {
    const [movie,setMovie] =useState([]);

    const getMovies = () => {
        fetch("https://65f16b78034bdbecc762700b.mockapi.io/Movies",{
            method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setMovie(mvs));
    }
    useEffect(()=>{
        getMovies();
    },[]);

    console.log(movie);
  return (
    <div className="movie-list">
      {
        movie.map((list,index)=>(
            <div key={index}>
                <Movie movieTake={list} getMovies = {getMovies}/>
            </div>
        ))
      }
    </div>
  )
}
