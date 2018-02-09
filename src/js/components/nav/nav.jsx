import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class HemmaNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">Hemma Health</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/quality">Quality</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default HemmaNav;