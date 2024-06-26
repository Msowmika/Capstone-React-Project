
export default function MovieChip({category,selectedMovies,setSelectedMovies}){
    const removeSelection=(category)=>{
        setSelectedMovies((selectedMovies)=>selectedMovies.filter((item)=>item!==category))
    }
    return(
        <>
     
        <button className="moviechip">
            {category.movie}&nbsp;&nbsp;&nbsp;<span onClick={()=>removeSelection(category)}>X</span>
            </button>
      </>    
    )
}