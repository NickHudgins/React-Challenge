import React from 'react';
import Dogs from './dogs.jpg';
import Logo from './logo.png';
import { Button, Card, CardImg, CardHeader, CardTitle, CardImgOverlay, Nav, NavItem, NavLink } from "reactstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function DogsCard() {
    return (
        <Card>
            <CardImg variant="top" src={Logo} alt="Valunteer Card" />
            <CardHeader>Adoptme.org
            <Nav variant="tabs" defaultActiveKey="#first">
                    <NavItem>
                        <NavLink href="#first">WHAT we do</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#link">WHO we are</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#disabled" disabled>
                            ADOPTION events
        </NavLink>
                    </NavItem>
                </Nav>
            </CardHeader>
            <CardImg src={Dogs} alt="Dogs Image" />
            <CardImgOverlay>
                <CardTitle>This is your new family!</CardTitle>
                <Button variant="primary">ADOPT NOW</Button>
            </CardImgOverlay>
        </Card>
    );
}

export default DogsCard;