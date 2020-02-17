import React from "react";
import Testimonial from "../../testimonial.jpg";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialCard.css";


function TestimonialCard() {
  return (
    <Card className="testimonial-container">
      <div class="card-header">TESTIMONIAL OF THE MONTH</div>
      <div class="testimonial-img">
        <CardImg src={Testimonial} alt="Testimonial Card" />
      </div>
      <div class="testimonial-txt">
        <CardImgOverlay>
          <CardText>Mongi, my best friend who saved my life.</CardText>
          <button class='button play'></button>
        </CardImgOverlay>
      </div>
    </Card>
  );
}

export default TestimonialCard;
