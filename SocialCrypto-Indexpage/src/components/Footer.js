import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";


export const Footer = () => {
  return (
    <footer className="footer h1 " >
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <p>Copyright permission @CODE_ZERO</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
