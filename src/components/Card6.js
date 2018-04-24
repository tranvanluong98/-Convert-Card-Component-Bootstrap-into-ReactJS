import React from 'react';
import Card5 from './Card5.js';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardLink
} from 'reactstrap';
const Card6 = (props) => {
    return (
        <div style={{ width: "318px", margin: "auto" }}>
            <h3 style={{ textAlign: "center" }}> Kitchen sink</h3>
            <Card >

                <CardImg height="180px" width="318px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle style={{ padding: "1.25rem" }}>Card Title</CardTitle>

                    <CardText style={{ padding: "1.25rem" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <div>
                        <ul style={{ listStyle: "none", marginLeft: "-12%" }}>
                            <li >
                                <Card >

                                    <CardText className="list-cards">Cras justo odio</CardText>

                                </Card>
                            </li>


                            <li >
                                <Card >

                                    <CardText className="list-cards">Dapibus ac facilisis in</CardText>

                                </Card>
                            </li>

                            <li >
                                <Card >

                                    <CardText className="list-cards">Vestibulum at eros</CardText>

                                </Card>
                            </li>
                            <li style={{ padding: "1.25rem" }}>
                                <CardLink href="#" style={{ marginLeft: "20%" }}>Card Link</CardLink>
                                <CardLink href="#"  >Another Link</CardLink>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
            <br /> <br />
        </div>

    );
};

export default Card6;