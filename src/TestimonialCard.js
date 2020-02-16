import React from 'react';
import Testimonial from './testimonial.jpg';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function TestimonialCard() {
    return (
        <Card className="TestimonialCard">
            <CardImg src={Testimonial} alt="Testimonial Card" />
            <CardImgOverlay>
                <CardTitle>TESTIMONIAL OF THE MONTH</CardTitle>
                <CardText>
                    Mangi, my best friend who saved my life.
    </CardText>
            </CardImgOverlay>
        </Card>
    );
}

export default TestimonialCard