import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
const Card12 = (props) => {
    return (
        <div className="card-12" >
            <h3 style={{ textAlign: "center" }}> Image Card</h3>
            <Card  >

                <CardImg height="180px" width="780px" src="https://i.ytimg.com/vi/PO8nTZ0LLy4/maxresdefault.jpg" alt="Card image cap" />
                <CardBody style={{ padding: "1.25rem" }}>
                    <CardTitle>Card Title</CardTitle>
                    <br />
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardFooter style={{ backgroundColor: "#fff", color: "rgb(108, 117, 125)" }}>Last updated 3 mins ago </CardFooter>

                </CardBody>
            </Card>
            <br /> <br />
        </div>

    );
};

export default Card12;