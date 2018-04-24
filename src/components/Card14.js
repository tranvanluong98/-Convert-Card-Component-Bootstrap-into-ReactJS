import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';

const Card14 = (props) => {
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Groups Image</h3>
            <CardGroup style={{ border: "2px solid gray", padding: "1.2rem" }}>
                <Card >
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody style={{ padding: "1.2rem" }}>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}> Go somewhere </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody style={{ padding: "1.2rem" }}>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}> Go somewhere </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody style={{ padding: "1.2rem" }}>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}> Go somewhere </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Card14;