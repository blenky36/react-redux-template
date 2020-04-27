import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logoutRequest } from '../../_actions/userActions';
import { connect } from 'react-redux';

const NavMenu = ({ onSignOutClicked }) => (
    <Fragment>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">React App </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link >Home</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <NavDropdown alignRight title={<FontAwesomeIcon icon={faUser} color="white" />} id="basic-nav-dropdown">
                        <NavDropdown.Item >My Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => onSignOutClicked()} >Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Fragment>
)

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    onSignOutClicked: () => dispatch(logoutRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);

