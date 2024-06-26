

export default function MovieBox({category,selectedMovies,setSelectedMovies}){
const handleSelection=(category)=>{
    if(selectedMovies.includes(category)){
        setSelectedMovies(selectedMovies.filter((item)=>
            item !== category))
}
else{
     setSelectedMovies([...selectedMovies,category])
}}

    return(
        
    <div  className={`category ${category.selectedMovies}`} style={{border:`2px solid ${selectedMovies.includes(category)?"red" : "black"}`}}
    onClick={()=>handleSelection(category)}>
        
        <h1>{category.movie}</h1>
        </div>
    ) 
    
}