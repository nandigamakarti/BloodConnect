import { useParams } from "react-router-dom"

export const About=()=>{

    const {name}=useParams();
    return(
        <h1>About {name}</h1>
    )
}