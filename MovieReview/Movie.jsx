import React from "react";
import "./movie.css";
const movie = (props) => {
  return (
    <div>
    

     


        <div className="box">
          <img src={props.img} alt="imag" />
          <p className="p "><br />{props.title} released : {props.year}</p>
        
        </div>


      </div>
    
  );
};

export default movie;
