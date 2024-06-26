
import { useEffect, useState } from "react";
import image from "./image 14.png"
export default function Browse() {
    const [genreList, setGenreList] = useState([]);
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        const fetchGenres = async () => {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWU4OTc2YTg2M2ExNmE2NWZhOTdmZmJhMTE3YjQ3OCIsIm5iZiI6MTcxOTIxODc0NC4zMTkxMDUsInN1YiI6IjY2NzkyYjIwNDYyYWZjNjY2MWQ5Nzg5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1E57IPZ5Ym14ivrpUCo8WoFkvxIkvlRlrTZmUzj24iQ'
                }
              };
              
            const res=await  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)

            const data = await res.json();
            setGenreList(data.genres);
            

        }
        fetchGenres();
    }, [])


    useEffect(() => {
        if (genreList.length > 0) {
            let genresToBeFetched = [];
            userSelectedGenres.forEach((genre) => {
                genresToBeFetched.push(genreList.find((item) => item.name === genre.movie))
            })
            const fetchMovies = async () => {
                const options = {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWU4OTc2YTg2M2ExNmE2NWZhOTdmZmJhMTE3YjQ3OCIsIm5iZiI6MTcxOTIxODc0NC4zMTkxMDUsInN1YiI6IjY2NzkyYjIwNDYyYWZjNjY2MWQ5Nzg5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1E57IPZ5Ym14ivrpUCo8WoFkvxIkvlRlrTZmUzj24iQ'
                    }
                  };
                  
                  
                    
                const idArray = genresToBeFetched.map((item) => item.id);
                idArray.join('%2C');
                const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${idArray}`, options)
                const data = await res.json();
                setMovies(data.results);
               
            }
            fetchMovies();
        }
    }, [genreList])

    const userSelectedGenres = JSON.parse(localStorage.getItem("selectedMovies"));

    return (
        <div className="body">
            <h1 className="head3">Super app</h1>
            <img style={{width:"70px", height:"70px" ,marginLeft:"93%",marginTop:"-50px"}}src={image} alt=""></img>
            <p className="para2">Entertainment according to your choice</p>
            
            {movies === null ? "loading..." :
                <div className="display">
                    {movies.map((movie, idx) => {
                        if (idx >= 4 * userSelectedGenres.length) return null;
                        return <>
                            {idx % 4 === 0 ? <div className="genre1">
                                {userSelectedGenres[idx / 4].movie}</div> : null}
                            <div key={movie.id} className="key">
                                <img  className="title" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                               {movie.title}</div>
                        </>
                    })}
                </div>

            }
        </div>
    )
}