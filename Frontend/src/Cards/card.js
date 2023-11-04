import React from "react";


export default function Card(props){



    return(
        <div className="cardsDesign">
          <a href={props.link}>
          <img src={props.source} className="cardsImage" />
          </a>
          <header>{props.header}</header>
          <h4>{props.details}</h4>
          <h6>{props.date}</h6>
          
        </div>
    )

}