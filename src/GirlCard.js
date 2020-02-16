import React from 'react';
import Girl from './girl.png';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function GirlCard() {
        return(
            <div className="GirlCard">
        <Card>
            <CardImg variant="top" src={Girl} alt="Valunteer Card" />
            <CardBody>
                <CardTitle>VOLUNTEERS</CardTitle>
                <CardText>
                    Amazing people, making a difference every single day! Join us now and be part of a community that is changing the world.
        </CardText>
                <button variant="primary">Join Us</button>
            </CardBody>
        </Card>
        </div>
        );
    }


export default GirlCard;