import React from 'react';

const MovieCard = ({ movie}) => {
    return(
        <div className='movie bg-black rounded-lg hover:cursor-pointer hover:shadow-lg hover:bg-slate-900 hover:scale-105 ease-in-out duration-300'>
            <div>
            <p className='absolute bg-black/60 text-white p-2 rounded-br-lg rounded-tl-lg'> {movie.Year}</p>
            </div>

            <div>
                <img className='h-[350px] w-full object-cover rounded-t-lg' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="movie1.Title" />
            </div>
            <div className='p-4'>
                <span className='text-gray-400'>{movie.Type}</span>
                <h3 className='text-[20px] text-white  text-container'>{movie.Title}</h3>
            </div>
        </div>
    );
}
    
export default MovieCard;