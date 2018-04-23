import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button ,CardLink} from 'reactstrap';
const Card3 = (props) => {
  return (
    <div style = {{width: "318px", margin:"auto"}}>
     <h3 style={{textAlign:"center"}}> Titles, text, and links</h3>
    
    <Card style={{  padding: "1.25rem" }}>
      
      <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody >
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
    </Card>
  </div>
  );
};

export default Card3;