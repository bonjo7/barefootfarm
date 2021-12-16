import { Navbar, Container, Nav } from "react-bootstrap";
import { List } from "phosphor-react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.nav} expand='lg'>
      <Container>
        <Navbar.Brand className={styles.link} href='#home'>
          Barefoot Farm
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.hamburgerIcon}
          aria-controls='basic-navbar-nav'
        >
          <span>
            <List size={24} color='#ffffff' />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link className={styles.link} href='#home'>
              Our Story
            </Nav.Link>
            <Nav.Link className={styles.link} href='#link'>
              Blog
            </Nav.Link>
            <Nav.Link className={styles.link} href='#link'>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
