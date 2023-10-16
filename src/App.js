import React from 'react';
import { useEffect,useState } from 'react';
import { NavBar } from './NavBar';
import Search from './Search';
import Card from './Card'
const API_URL ='http://www.omdbapi.com?apikey=19b34b3a';

 function App() {
const [movies , setMovies]=useState([]);
const [searchTerm, setSearchTerm]=useState('superman');
const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies(searchTerm);
    },[searchTerm]);
 console.log(movies);

      




    
        return (

                
                <div className=' bg-gray-900 h-full'>
                  <div  className='flex flex-col item-center w-full h-4/12 gap-3 '>
                   <NavBar/>
                   <Search setSearchTerm={setSearchTerm}/>
                  </div>
                  
                 
                  <div className='w-10/12 mx-auto bg-white  m-6 p-4'>
                     {
                  movies?.length>0
                   ?(
                    <div className='flex gap-4 flex-wrap mt-2'>
                        {
                            movies.map((movie)=>(
                                <Card movie={movie} />
                            ))
                        }
                    </div>
                ):(
                    <div className='empty h-screen flex items-center justify-center text-lg'>
                        <h2>No Movies Found</h2>
                    </div>
                )
                 }

                  </div>
                  <div className='text-lg'>h</div>
                </div>

                
        );
}

export default App;