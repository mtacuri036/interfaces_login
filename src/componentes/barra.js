
import React from "react";
import Logo from '../imagenes/logo.png'

function barra(){
    return(
        <div className="menu">
            <div className="color_a"></div>
            <div className="logo">
                <img className="imagen_logo" src={Logo}></img>
            </div>
            <div className="color_b"></div>
        </div>
    );
}

export default barra;
