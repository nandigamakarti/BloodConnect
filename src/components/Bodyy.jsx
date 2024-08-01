import styles from "./Body.module.css"
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Donate from "./Donate";
import Recieve from "./Recieve";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Faqs } from "../pages/Faqs";
import { Map } from "./Map";

const Boddy=()=>{

    const name="shaurya";

    return (
            <div className={styles.body}>
                <div className="grid grid-cols-2 grid-flow-col gap-4  my-10 mx-10">
                
                <div style={{padding:"0.01em" , color:"black",fontWeight:"bold" , fontSize:"3em" , textDecoration:"overline"}}>
                    Blood Connect
                </div>

                <div className={styles.navbar } >
                     <ul className={styles.ul} >

                        <Link to={"/"}><li className={styles.li} >Home</li></Link>
                        <Link to={`/About/${name}`}><li className={styles.li} >About</li></Link>
                        <Link to={"/Contact"}><li className={styles.li} >Contact</li></Link>
                        <Link to={"/Faqs"}><li className={styles.li} >FAQs</li></Link>
                    </ul>
                </div>

                </div>
                
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Donate" element={<Donate/>}/>
                    <Route path="/Recieve" element={<Recieve/>}/>
                   <Route path="/About/:name" element={<About/>}/>    {/* // dynamic routing */}
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Faqs" element={<Faqs/>}/>
                    <Route path="/Map" element={<Map/>}/>
              </Routes>
            </div>
            <footer><center>&#169; copyright to Slytherin's Blood Bank</center></footer>
            </div>
            

            
           
    )
}

export default Boddy;