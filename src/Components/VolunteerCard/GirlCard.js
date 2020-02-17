import React from "react";
import Girl from "../../girl.png";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./VolunteerCard.css";

function GirlCard() {
  return (
    <div className="volunteer-container">
      <Card>
        <div class="card-header">VOLUNTEERS</div>
        <CardImg variant="top" src={Girl} alt="Valunteer Card" />
        <CardBody>
          <div class="volunteer-text">
            <CardText>
              Amazing people, making a difference every single day! Join us now
              and be part of a community that is changing the world.
            </CardText>
          </div>
          <div class="volunteer-button">
            <button type="button" class="btn btn-outline-primary">
              Join Us
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default GirlCard;
