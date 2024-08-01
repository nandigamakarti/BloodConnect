import styles from "./Content.module.css"
import Lottie from "lottie-react";
import help from "../assets/help.json";
import { useState } from "react";
import Categories from "../assets/data";

const Recieve=()=>{
    const [Category,setCategory]=useState("A+");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [age,setAge]=useState();
    const [weight,setWeight]=useState(50);
    const [gender,setGender]=useState("male");

   

    const [recievers,setRecievers] = useState([{
        name:"Name",
        email:"Email",
        phone:"Phone",
        age:"Age",
        weight:"Weight",
        gender:"Gender",
        Category:"Blood Group"
    }]);

    const reset=()=>{
        setCategory("+A");
        setAge(0);
        setName("");
        setEmail("");
        setGender("male");
        setPhone("");
        setWeight(0);
    }


    const submitRecievers=(e)=>{
        e.preventDefault();

         const newReciever ={
             name:name,
             email,
             phone,
             age,
             weight,
             gender,
             Category
         }


         setRecievers([...recievers,newReciever]);

         reset();
 }
      
    return(
        <>

                {
                    recievers.map((reciever,idx)=>{

                        return(
                            <>
                            <span>{reciever.name}</span>
                            <span>--{reciever.age}</span>
                            <span>--{reciever.Category}</span>
                            <br/>
                            </>);
                    })
                }


                    <div className="grid grid-cols-2 grid-flow-col gap-4  my-10 mx-20">
                    <div className={styles.box1}>
            
            <center>
                <form action="" onSubmit={submitRecievers} >
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th style={{fontFamily:"cursive" ,fontSize:"1.5em"}} colSpan={2}>Require Blood</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}><label htmlForm="name">Name:</label></td>
                        <td className={styles.td}><input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" id="name" name="name" required/></td>
                    </tr>
    
                    <tr className={styles.tr}>
                        <td className={styles.td}><label htmlFor="email">Email:</label></td>
                        <td className={styles.td}> <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" id="name" name="name" required/></td>
                    </tr>
    
                    <tr className={styles.tr}>
                        <td className={styles.td}><label htmlFor="phone">Phone:</label></td>
                        <td className={styles.td}> <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" id="name" name="name" required/></td>
                    </tr>
    
                    <tr className={styles.tr}>
                        <td className={styles.td}><label htmlFor="blood-type">Blood Type:</label></td>
                        <td className={styles.td} ><select value={Category} onChange={(e)=>{setCategory(e.target.value)}} style={{width:"11.4em"}} id="blood-type" name="blood-type" required>
                         {
                            Categories.map((Categories,idx)=>{
    
                                return(
                                    <option key={idx} value={Categories.value}>{Categories.type}</option>
                                )
                            })
                          }
                    </select></td>
                    </tr>
    
                    <tr className={styles.tr}>
                        <td className={styles.td}> <label  htmlFor="age">Age:</label></td>
                        <td className={styles.td} ><input value={age} onChange={(e)=>{setAge(e.target.value)}} type="number" id="age" name="age" required/></td>
                    </tr>
    
                    <tr className={styles.tr}>
                        <td className={styles.td}> <label htmlFor="weight">Weight:</label></td>
                        <td className={styles.td}> <input value={weight} onChange={(e)=>{setWeight(e.target.value)}} type="number" id="weight" name="weight" required/></td>
                    </tr>
    
                    <tr className={styles.tr}>
                        <td className={styles.td}> <label htmlFor="Gender">Gender:</label></td>
                        <td className={styles.td}> 
                        Male:<input checked={gender==="male"?true:false} onChange={()=>setGender("male")} style={{marginRight:"1em"}} type="radio" id="male" name="male" value="male"/>
                      Female:<input checked={gender==="female"?true:false} onChange={()=>setGender("female")} type="radio" id="female" name="female" value="female" />
                        </td>
                    </tr>
    
                    <tr className={styles.tr}>
                        <th colSpan={3} style={{fontFamily:"cursive" ,fontSize:"1.2em" }} ><input className={styles.btn} type="submit"></input></th>
                    </tr>
    
                </table>
                 
                </form>
                    </center>
    
                </div>
                
             <div className={styles.box2}>
             <Lottie style={{height:"30em"}} animationData={help} loop={true}/>
             </div>
             </div>
                    
                     </>
    )

}

export default Recieve;