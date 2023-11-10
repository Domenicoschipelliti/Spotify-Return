import { Card, Col, Container, Row } from "react-bootstrap";

const Player = () => {
  return (
    <Container fluid style={{ position: "sticky", bottom: "0" }}>
      <Row>
        <Col>
          <Card className="text-center bg-dark">
            <Card.Header>
              <i className="bi bi-shuffle text-light"></i>
              <i className="bi bi-skip-backward-fill text-light ms-4"></i>
              <i className="bi bi-play text-light ms-2 me-2"></i>
              <i className="bi bi-skip-forward-fill text-light me-4"></i>
              <i className="bi bi-repeat text-light"></i>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
