import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from './logo.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cats from "../pages/Cats";
import Dogs from "../pages/Dogs";
import Contacts from "../pages/Contacts";
import HowToHelp from "../pages/HowToHelp";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="90"
                                width="90"
                                className='d-inline-block align-top'
                                alt="Logo"
                            />Домик надежды
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">О приюте</Nav.Link>
                                <Nav.Link href="/cats">Кошки</Nav.Link>
                                <Nav.Link href="/dogs">Собаки</Nav.Link>
                                <Nav.Link href="/contacts">Контакты</Nav.Link>
                                <Nav.Link href="/howToHelp">Как помочь</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" Component={Home}/>
                        <Route exact path="/cats" Component={Cats}/>
                        <Route exact path="/dogs" Component={Dogs}/>
                        <Route exact path="/contacts" Component={Contacts}/>
                        <Route exact path="/howToHelp" Component={HowToHelp}/>
                    </Routes>
                </Router>
            </>
        );
    }
}