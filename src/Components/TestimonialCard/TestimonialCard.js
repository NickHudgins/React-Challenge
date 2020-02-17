import React from "react";
import Testimonial from "../../testimonial.jpg";
import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialCard.css";

function TestimonialCard() {
  return (
    <Card className="testimonial-container">
      <div class="testimonial-header">TESTIMONIAL OF THE MONTH</div>
      <div class="testimonial-img">
        <CardImg src={Testimonial} alt="Testimonial Card" />
      </div>
        <CardImgOverlay>
        <div class="testimonial-txt">
          <CardText>Mongi, my best friend who saved my life.</CardText>
        </div>
        <button class="button-play"></button>
      </CardImgOverlay>
    </Card>
  );
}

export default TestimonialCard;
