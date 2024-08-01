import styles from "./Content.module.css"
import Lottie from "lottie-react";
import donate from "../assets/donate.json";
import { useState } from "react";
import Categories from "../assets/data";
import React, { useEffect } from 'react'
import axios from 'axios';

const Donate=()=>{
    const [Category,setCategory]=useState("A+");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [age,setAge]=useState();
    const [weight,setWeight]=useState(50);
    const [gender,setGender]=useState("male");

    const [lat,setLat] = useState();

    const [long,setLong] = useState();

   const [inp, setInp] = useState("");
   const [search, setSearch] = useState("");


useEffect(()=>{

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position){

            setLat(position.coords.latitude)

            setLong(position.coords.longitude)

                    });   

      }

    },[]);

    console.log(lat,long);



    const [doners,setDoners] = useState([{
        name:"",
        email:"",
        phone:"",
        age:"",
        weight:"",
        gender:"",
        Category:"",
        lati:lat,
        longi:long
    }]);


    const reset=()=>{
        setCategory("A+");
        setAge(0);
        setName("");
        setEmail("");
        setGender("male");
        setPhone("");
        setWeight(0);
    }

    const getDoners = (e) =>{
        axios.get('http://127.0.0.1:3001/getAllDoners')
        .then (res =>{
          setDoners(res.data);
        })

      }
    
    
      useEffect(()=>{
          getDoners();
      },[])
    

    const submitDoners=(e)=>{
        console.log("clicked");

            const newDoner ={
                name:name,
                email,
                phone,
                age,
                weight,
                gender,
                Category,
                lati:lat,
                longi:long
            }

            axios.post("http://127.0.0.1:3001/submitDoner",newDoner)
            .then(res=>{
            console.log(res);
             })

             reset();

             getDoners();
    }


      const filtered = doners.filter((elem) =>

    elem.Category.toLowerCase().includes(search.trim().toLowerCase())

  );

      
    return(<>
    <center><table className={styles.table}>
                    <tr>
                    <th className={styles.td} colSpan={2}>Donors List</th>
                    <th className={styles.td} colSpan={2}>
                    <input className={styles.btn} style={{width:"8em"}} type="text" value={inp} placeholder="Blood Group" 
                        onChange={(e)=>{setInp(e.target.value);
                            setSearch(inp)
                        }
                        } />
                          
                          
                    </th>
                    {/* <th>
                    <button className={styles.btn} onClick={() => setSearch(inp)}>Search</button>
                    </th> */}
                    </tr>

                    <tr>
                        <th className={styles.td}>Nmae</th>
                        <th className={styles.td}>Age</th>
                        <th className={styles.td}>Phone</th>
                        <th className={styles.td}>Blood Group</th>
                    </tr>
                    
                    {
                        filtered.map((doner,idx)=>{
                            return(
                                    <tr>
                                        <td className={styles.td} >
                                            {doner.name}
                                        </td>
                                        <td className={styles.td} >
                                            {doner.age}
                                        </td>
                                        <td className={styles.td} >
                                            {doner.phone}
                                        </td>
                                        <td className={styles.td} >
                                            {doner.Category}
                                        </td>
                                    </tr>
                            );
                        })
                    }
                </table></center> 



<div className="grid grid-cols-2 grid-flow-col gap-4  my-10 mx-20">
    <div className={styles.box1}>
            
        <center>
            <form action=""  >
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th style={{fontFamily:"cursive" ,fontSize:"1.5em"}} colSpan={2}>Donate Blood</th>
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
                    <th colSpan={3} style={{fontFamily:"cursive" ,fontSize:"1.2em" }} ><input className={styles.btn} type="submit" onClick={submitDoners}></input></th>
                </tr>

            </table>
             
            </form>
        </center>

    </div>
           
    <div className={styles.box2}>
        <Lottie style={{height:"30em"}} animationData={donate} loop={true}/>
        
    </div>
</div>
               
                </> );

                    }

export default Donate;