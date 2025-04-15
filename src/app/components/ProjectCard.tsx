"use client"

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

function ProjectCards(props:any) {
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
