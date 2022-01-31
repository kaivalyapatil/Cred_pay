import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoimage from "../logoimage.jpeg";

export default function Head() {
  let navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    sessionStorage.removeItem("id");
  };
  const navHome = () => navigate("/mainpage");

  const navPayment = () => navigate("/payment");

  return (
    <Navbar bg="dark p-0" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <div className="mt-0 ">
          <img
            className="ms-5"
            src={logoimage}
            alt="img"
            style={{ height: "60px" }}
          />
        </div>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={navHome}>Home</Nav.Link>

            <Nav.Link onClick={navPayment}>credit card bill payment</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
