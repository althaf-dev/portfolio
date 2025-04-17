"use client"

import React, { ReactNode } from "react";
import Card from "react-bootstrap/Card";
import Image, { StaticImageData } from "next/image";


interface Props{
  imgPath: string | StaticImageData ;
  title: ReactNode;
  description: ReactNode;
  isBlog:boolean;
  ghLink:string;
  demoLink:string

}

function ProjectCards(props:Props) {
  return (
    <Card className="project-card-view">
        <Image src={props.imgPath} alt="card-img"/>
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title style={{paddingLeft:"12px",paddingRight:"12px"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" ,padding:"12px"}}>
          {props.description}
        </Card.Text>
        
    </Card.Body>
    </Card>
  );
}
export default ProjectCards;
