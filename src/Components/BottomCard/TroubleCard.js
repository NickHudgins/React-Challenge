import React from 'react';
import Trouble from '../../friend-in-trouble.png';
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, Nav, NavItem, NavLink, Button } from "reactstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './BottomCard.css'

function TroubleCard() {
    return (
        <Card>
             <CardImg variant="left" src={Trouble} alt="Trouble Pic" />
  <CardHeader>
    <Nav variant="pills" defaultActiveKey="#first">
      <NavItem>
        <NavLink href="#first">PROGRAMS</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#link">ASSOCIATED COMPANIES</NavLink>
      </NavItem>
    </Nav>
  </CardHeader>
  <CardBody>
    <CardTitle>BEHAVIOR PROGRAM</CardTitle>
    <CardText>
     Evaluation of each dog using specialists who determine the best training that will help your friend be a better family member.
    </CardText>
    <Button variant="primary">See More!</Button>
    <CardTitle>MY NEXT FAMILY</CardTitle>
    <CardText>
     Are you looking for a new family member? Then this program is for you! Don't buy, adopt here and give a home to these amazing friends!
    </CardText>
    <Button variant="primary">See More!</Button>
  </CardBody>
</Card>
    );
}

export default TroubleCard