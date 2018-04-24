import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardText, Button } from 'reactstrap';
const Card7 = (props) => {
    return (
        <div style={{ width: "318px", margin: "auto" }}>
            <Card>
                <CardHeader className="header-card-7"> Featured </CardHeader>
                <CardBody style={{ padding: "1.25rem" }}>
                    <CardTitle> Special title treatment </CardTitle>
                    <CardText> With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}> Go somewhere </Button>


                </CardBody>
            </Card>
        </div>

    );
};
export default Card7;
