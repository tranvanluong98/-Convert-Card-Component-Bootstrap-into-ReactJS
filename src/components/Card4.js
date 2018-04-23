import React from 'react';
import {
  Card, CardImg, CardText
} from 'reactstrap';
const Card4 = (props) => {
  return (
    <div >
      <br /> <br /><br />
      <div style={{ width: "360px", margin: "auto" }}>
        <h3 style={{ textAlign: "center" }}> Card Image</h3>
        <Card style={{  padding: "1.25rem" }}>

          <CardImg height="180px" width="318px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

        </Card>
      </div>
    </div>
  );
};

export default Card4;