import React from "react";
import Card from "./Cards/card";


export default function RestofPage(){
    return (
        <div className="restpageDIV">
        <div className="Introduction">
        <h1 style={{marginBottom:"3rem"}}>Introducing SocialFirewall: Empowering Cybersecurity and Eradicating Sextortion</h1>
        <h3>At SocialFirewall, we're on a mission to safeguard the digital world from cyber threats while actively working to eliminate the pervasive issue of sextortion from society. We believe that a safer online environment is not only possible but imperative.</h3>
        </div>
           <h1 className="TitleText">Most Frequent Questions</h1>
           
           <div className="Div1RestPage">
           <Card 
           link="https://www.instagram.com/p/CzIdkcfvFE4/?img_index=1"
           source="insta1.jpg" 
           header="What is Cybersecurity"
           details="Click and Read More"
           date="1.11.2023"
           />

           <Card 
           link="https://www.instagram.com/p/CzIZpvwPOyh/?img_index=1"
           source="insta2.jpg" 
           header="What is Sextortion"
           details="Click and Read More"
           date="3.11.2023"
           />

          <Card 
           link="https://www.instagram.com/p/CzZJPkPM32w/?img_index=1"
           source="insta3.jpg" 
           header="Why people fall for these traps"
           details="Click and Read More"
           date="7.11.2023"
           />
           </div>

           


        </div>
    )
}