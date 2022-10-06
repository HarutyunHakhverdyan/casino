import React from "react";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import './main.css'

export default function MainProduct(){
    return (
        <div className="cont" >
            <Header />
            <Main />
            <Footer />
        </div>
    )
}