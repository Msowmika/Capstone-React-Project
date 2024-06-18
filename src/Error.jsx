import { useNavigate } from "react-router-dom"


export default function ErrorPage(){
    const navigate=useNavigate()
    return(
        <><div style={{textAlign:'center'}}>
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
        <button onClick={()=>navigate("/")}>Return to Home</button>
        </div>
        </>
        
    )
    
}