// react leaflet for maps in react.
import React, { useState,useEffect } from 'react'
import styles from "./Content.module.css"

import BloodMap from './BloodMap';

 

export const Map=()=> {

    const [type,setType] = useState("a+");

    const [lat,setLat] = useState();

    const [long,setLong] = useState();

    const [show,setShow] = useState(false);

    

    useEffect(()=>{

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position){

            setLat(position.coords.latitude)

            setLong(position.coords.longitude)

                    });   

      }

    },[]);

 

    console.log(lat,long)

 

    const submitHandler = (e) => {

      e.preventDefault();

      setShow(!show)

    }
    return(
        <>{
            !show?(
                <center>

<form className={styles.form} action="" onSubmit={submitHandler}>
                    <table className={styles.table}>
                        <tr className={styles.tr}>
                            <td className={styles.td}><label htmlFor="type">Type:</label></td>
                            <td className={styles.td}>
                            <input type="text" value={type} onChange={(e)=>{
                        setType(e.target.value);
                    }}/>
                            </td>

                        </tr>
                        <tr className={styles.tr}>
                            <td colSpan={2} className={styles.td}><input className={styles.btn} type='submit'></input></td>

                        </tr>
                    </table>

                </form>

                </center>
                
            ):
            lat && long && <BloodMap lat={lat} long={long} type={type}/>
        }
        
        </>
    );
}