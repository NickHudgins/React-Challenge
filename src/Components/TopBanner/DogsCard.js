import React from "react";
import Dogs from "../../dogs.jpg";
import { Button, Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./TopBanner.css";

function DogsCard() {
  return (
    <Card>
      <div >
        <CardImg className="dog-image" src={Dogs} alt="Dogs Image" />
      </div>

      <CardImgOverlay>
        <div class="dog-card-text">
          <CardText>This is your new family!</CardText>
        </div>
        <div class="adopt-now-btn">
          <Button variant="primary">ADOPT NOW</Button>
        </div>
      </CardImgOverlay>
    </Card>
  );
}

export default DogsCard;
