import React from 'react'
import Dermatop from '../../assets/Home/dermatop.png'
import Paramol from '../../assets/Home/paramol-sol-tabs.png'
import Metformin from '../../assets/Home/Metformin.png'
import uripan from '../../assets/Home/uripan.png';
import sensovit from '../../assets/Home/sensovit.png';
import nexture from '../../assets/images/nexture.png';
import Home from '../../pages/Home';

const data=[
    {
        id:5,
       image:Paramol,
       About :"this Information represents breif description about paramol druge and it's compounds ",  
       Name:"Paramol"
    },
    {
        id:6,
        image:Metformin,
        About :"this Information represents breif description about paramol druge and it's compounds ",  
        Name:"Metformin"
     },
     {
        id:7,
        image:Dermatop,
        About :"this Information represents breif description about paramol druge and it's compounds ",  
        Name:"Dermatop"
     },
     {
        id:8,
       image:uripan,
       About :"this Information represents breif description about paramol druge and it's compounds ",  
       Name:"Uripan"
    },
    {
        id:9,
       image:sensovit,
       About :"this Information represents breif description about paramol druge and it's compounds ",  
       Name:"Sensovit"
    },
    {
        id:2,
       image:nexture,
       About :"this Information represents breif description about paramol druge and it's compounds ",  
       Name:"Nexture"
    },


];
export default function ItemData() {
    return(
        <div>
            <Home Items={data}/>
        </div>
    );
    
}
