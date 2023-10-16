import React from 'react';

function Card({movie}) {
  return (
    <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">{movie.Poster === "N/A" ? <div className='h-1/2 text-white flex justify-center items-center'>Poster not Found</div>: <img className="rounded-t-lg" src={movie.Poster} alt="" /> 
}
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.Year}</p>
       
      </div>
    </div>
  );
}

export default Card;
