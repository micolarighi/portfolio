import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import "./NavTop.css";

function NavTop() {
  const [toogleMenu, setToogleMenu] = useState(false);

  function toogleOpen() {
    setToogleMenu(true);
  }

  function toogleClose() {
    setToogleMenu(false);
  }

  if (toogleMenu) {
    return (
      <>
        <NavTop />
        <div className="menu">
          <Container fluid className="menu-close">
            <button className="toogle-menu ms-auto" onClick={toogleClose}>
              <FaWindowClose />
            </button>
            <Navbar.Brand className="navtop-brand text-center">
              <Link to="/">
                Micola<i id="normal">Arighi</i>.
              </Link>
            </Navbar.Brand>
            <div className="menu-list">
              <NavLink to="/" onClick={toogleClose}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toogleClose}>
                About
              </NavLink>
              <NavLink to="/projects" onClick={toogleClose}>
                Projects
              </NavLink>
              <NavLink to="/contact" onClick={toogleClose}>
                Contact
              </NavLink>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar className="navtop py-3" expand="lg">
        <Container className="px-4 nav-container">
          <Navbar.Brand className="navtop-brand">
            <Link to="/">
              Micola<i id="normal">Arighi</i>.
            </Link>
          </Navbar.Brand>
          <button className="toogle-menu" onClick={toogleOpen}>
            <FaAlignRight />
          </button>
          <Nav className="navtop-list ms-auto">
            <Nav.Link className="pe-3">
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link className="pe-3">
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
