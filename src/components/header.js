import React from "react";
import Clock from "./clock";
import './main.css'
import Image from "./image";
import Title from './hederCenter'
export default function Header(){
   
    return (
        <div className="haeder">
        <div className="headerItem1"> 
           <div className="headerItem1Left">
              <Image src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-casino-badge-vector-illustration-badge-icon-png-image_5253117.jpg"/>
              <Image src="https://1000logos.net/wp-content/uploads/2021/04/Telegram-logo.png" />
              <Clock />
           </div> 
           <div className="headerItem1Center">
            <Title />
           </div>
           <div className="headerItem1Right"></div> 
        </div>
        <div className="headerItem2">
            <div className="headerItem2chaild">SPORTS</div>
            <div className="headerItem2chaild">ESPORTS</div>
            <div className="headerItem2chaild">LIVE</div>
            <div className="headerItem2chaild" style={{fontSize:40,color:'red'}}>CASINO</div>
            <div className="headerItem2chaild">TV GAMES</div>
        </div>
        </div>
    )
}