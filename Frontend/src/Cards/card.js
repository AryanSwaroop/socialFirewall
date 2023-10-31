import React from "react";


export default function cards(props){



    return(
        <div className="cardsDesign">
          <img src={props.source} />
          <header>{props.header}</header>
          <h4>{props.details}</h4>
          <h6>{props.date}</h6>
        </div>
    )

}