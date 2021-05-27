import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Generic Blog</Navbar.Brand>
                    <Nav className="mr-auto" />
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}


export default Header;