import React from "react";
import './main.css'
export default function Image(prop){
    return(
        <div className="headerIcon">
         <img src={prop.src} className="img1"></img>
        </div>
    )
}