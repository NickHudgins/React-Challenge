import React from "react";
import Dogs from "../../dogs.jpg";
import { Button, Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./TopBanner.css";

function DogsCard() {
  return (
    <Card>
      <div class="banner-container">
        <CardImg className="dog-image" src={Dogs} alt="Dogs Image" />
        <CardImgOverlay>
          <div class="btn-text">
            <div class="dog-card-text">
              <CardText>This is your new family!</CardText>
            </div>
            <div class="adopt-now-btn">
              <button type="button" class="btn btn-outline-danger">
                Adopt Now!
              </button>
            </div>
          </div>
        </CardImgOverlay>
      </div>
    </Card>
  );
}

export default DogsCard;
