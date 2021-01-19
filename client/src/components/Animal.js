import React from 'react'
import {  Card } from 'react-bootstrap';
import './animal.css'
import { SRLWrapper } from "simple-react-lightbox";

const Animal = ({animal}) => {
    
    return (
        <div className="Container ">
         <Card  className="card_detail" >
         <Card.Header>{animal.milkPerDay} लीटर दूध 
, {animal.whatTimePregnant} ब्यात, ₹ {animal.price} 
</Card.Header>
<SRLWrapper>
    <a href={animal.photo[0]} data-attribute="SRL">
         <Card.Img variant="top" src={animal.photo[0]} width='150px' height="150px" />
         </a>
    </SRLWrapper>
         <Card.Body>
         <Card.Text>ये {animal.bride} {animal.age} साल की है।यह 2 महीने पहलेब्यायी है अभी गभभवती  है|</Card.Text>
         </Card.Body>
         </Card>
        </div>
    )
}

export default Animal
