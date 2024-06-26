import { useState } from "react";
import MovieBox from "./components/MovieBox";
import MovieChip from "./components/MovieChip";
import { useNavigate } from "react-router-dom";

const MOVIES =[
    {
        id:0,
        movie:"Action"
    },
    {
        id:1,
        movie:"Drama"
    },
    {
        id:2,
        movie:"Romance"
    },
    {
        id:3,
        movie:"Thriller"
    },
    {
        id:4,
        movie:"Western"
    },
    {
        id:5,
        movie:"Horror"
    },
    {
        id:6,
        movie:"Fantasy"
    },
    {
        id:7,
        movie:"Music"
    },
    {
        id:8,
        movie:"Fiction"
    }
]
function Movie(){
    const navigate =useNavigate()
    const moveNext=()=>{
        if(selectedMovies.length<3){
            alert("Please select atleast 3 movies")
        }else{
            localStorage.setItem("selectedMovies",JSON.stringify(selectedMovies))
            setSelectedMovies([])
            navigate("/Info")
        }
    }
    const[selectedMovies,setSelectedMovies]=useState([])
    return(
        <>
        <div className="container1">
        <div className="box1" style={{color:"white"}}><h1 className="head2">Super app</h1><h1 className="subhead">Choose your entertainment category</h1></div>
        <div className="box2" style={{
            display:"grid",
            gridTemplateColumns:"repeat(3, 1fr)",
            width:"50vw",
            height:"50vh",
            marginLeft:"650px"

        }}>
            {MOVIES.map((category)=>
            <div key={category.id}>
              <MovieBox selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} category={category}/>
            </div>
        )}</div>
        {selectedMovies.length<3 && <p style={{color:"red",marginTop:"70px",marginLeft:"100px"}}>Please select atleast 3 movies</p>}
        <div className="grid-container">
        {selectedMovies.map((category)=><MovieChip key={category.id} category={category} setSelectedMovies={setSelectedMovies}/>)}
        </div>
        <button className="next" onClick={moveNext}>Next Page</button>
        </div>
        </>
    )
}
export default Movie;