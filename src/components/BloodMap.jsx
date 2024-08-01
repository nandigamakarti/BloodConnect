import React from 'react';

import {points} from '../assets/points';

import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Icon } from "leaflet";

import Icon2 from '../assets/location.png'

const skater = new Icon({

  iconUrl: Icon2,

  iconSize: [50, 50]

});

const BloodMap = ({lat,long,type}) =>  {

  

    let  bloodbank = points.filter((elem,idx,array)=> elem.blood === type.toLowerCase())


    return(
        <>
        

        <MapContainer center={[lat,long]} zoom={20} scrollWheelZone={true} style={{height:"500px",width:"200vh"}}>
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker position={[lat,long]} icon={skater}>
        <Popup>
            Your Location
        </Popup>
    </Marker>

    {
        bloodbank?.map((point,idx)=>{
            return (
                <Marker key={idx} position={[point.lat,point.long]} icon={skater} >
                    <Popup>
                        {point.msg}
                    </Popup>
                </Marker>
            )
        })
    }

</MapContainer>


        
        </>
    )
}

export default BloodMap;