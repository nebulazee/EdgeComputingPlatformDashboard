import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';
export default class _Navbar extends Component {
    render() {
        return (
            <Navbar bg="light" >
                <Navbar.Brand href="#home"><img style={{ width: "100px" }} src="https://thumbs.dreamstime.com/b/edge-computing-linear-icon-modern-outline-logo-c-concept-white-background-general-collection-suitable-use-web-apps-133520418.jpg" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/devices">Train Model</Nav.Link>
                        <Nav.Link href="/cluster">Cluster</Nav.Link>
                        <NavDropdown title="Devices" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addDevice">Add a device</NavDropdown.Item>
                            <NavDropdown.Item href="/viewDevices">View All Devices</NavDropdown.Item>
                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
