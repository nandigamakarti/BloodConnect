import styles from "../components/Content.module.css"
import Lottie from "lottie-react";
import anime from "../assets/anime.json";
import { Link } from "react-router-dom";

const Home=()=>{
   
    return(

        <>
        
        <div className="grid grid-cols-2 grid-flow-col gap-4  my-10 mx-20">
        <div className={styles.box1}>
            <div className={styles.heading}>
            <h1 >Slytherin's </h1>
            <h1>Blood Bank</h1>
            </div >
            <div style={{ marginTop:"1em", padding:"1.5em"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente facilis provident magnam illum consectetur eaque dolore porro saepe doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium sint cupiditate natus maiores consequatur ipsum nihil necessitatibus, atque consequuntur?
            </div>
            <div style={{ padding:"1.4em"}}>
               <Link to={"/Donate"}><button style={{color:"white",margin:"10px", padding:"0px 5px 0px 5px", border:"2px solid black" ,borderRadius:"10px",backgroundColor:"black" ,fontSize:"1.5em"}}>Donate</button></Link> 
               <Link to={"/Recieve"}><button style={{color:"white",margin:"10px", padding:"0px 5px 0px 5px", border:"2px solid black" ,borderRadius:"10px",backgroundColor:"black", fontSize:"1.5em"}}>Recieve</button></Link>
            </div>
            </div>
           
        <div className={styles.box2}>
        <Lottie style={{height:"30em"}} animationData={anime} loop={true} />
        </div>
        </div>

        <Link to={"/Map"}><button style={{color:"white",margin:"10px", padding:"0px 5px 0px 5px", border:"2px solid black" ,borderRadius:"10px",backgroundColor:"black", fontSize:"1.5em"}}>Map</button></Link>
        
            </>
    )
}

export default Home;