import React from "react";

const Banner = () =>(
<div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__480.jpg" alt="" />
        <div className="main-banner__data s-center">
          <h1>Glox Fox</h1>
          <p className="t2 s-mb-0">Hacer ejercicio nunca fue tan facil</p>
          <p>GYM</p>
          <a href="https://www.uaemex.mx" className="button">Inscribete</a>
        <a href="https://www.uaemex.mx" className="button">Horarios</a> 
        <a href="https://www.uaemex.mx" className="button">Entrenadores</a> 
        <a href="https://www.uaemex.mx" className="button">Motivacion</a> 
        <a href="https://www.uaemex.mx" className="button">Paquetes</a> 
        <a href="https://www.uaemex.mx" className="button">Promociones</a>  
        </div>
      </div>
    
    </div>
    
  </div>
  
)

export default Banner;