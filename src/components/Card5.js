import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const Card5 = (props) => {
    return (
        <div style={{ width: "318px", margin: "auto" }}>
            
            <h3 style={{ textAlign: "center" }}> Card List</h3>
            <div>
                <Card style={{  padding: "1.25rem" }}>
                <ul style={{listStyle: "none" , marginLeft:"-12%"}}>
                    <li >
                        <Card >
                            <CardText className="list-cards">Featured</CardText>
                        </Card>
                    </li>
                    <li>
                        <Card  >
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
                </ul>
                </Card>
            </div>
           
            <br /> <br />
        </div>

    );
};

export default Card5;