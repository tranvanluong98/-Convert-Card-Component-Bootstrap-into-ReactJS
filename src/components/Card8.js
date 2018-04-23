import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardText, CardFooter } from 'reactstrap';
const Card8 = (props) => {
    return (
        <div style={{ width: "318px", margin: "auto" }}>
        <br/> <br/>
            <Card style={{textAlign:"center"}}>
                <CardHeader className="header-card-7"> Featured </CardHeader>
                <CardBody style={{padding: "1.25rem"}}>
                <CardTitle> Special title treatment </CardTitle>
                <CardText> With supporting text below as a natural lead-in to additional content.</CardText>
                <CardFooter style={{color: "#6c757d"}}>2 days ago</CardFooter>   
                </CardBody>
            </Card>
        </div>

    );
};
export default Card8;