import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import SearchBar from "./SearchBar";

const MyNav = (data) => {
  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <Navbar expand="lg" className="bg-black">
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                  alt="spotylogo"
                  width="131"
                  height="40"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  <Nav.Link href="#action1" className="text-light">
                    <i className="bi bi-house-door-fill"></i> Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="text-light">
                    <i className="bi bi-book-fill"></i>Your Library
                  </Nav.Link>
                </Nav>
                <Form
                  className="d-flex"
                  onSubmit={(e) => {
                    e.preventDefault();
                    SearchBar(data);
                  }}
                >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-success"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Go
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNav;
