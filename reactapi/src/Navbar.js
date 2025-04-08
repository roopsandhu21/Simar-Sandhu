import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import s from './phone.png';


function BasicExample() {
    return (
        
        <div className='bhu'>
      <Navbar expand="lg" className="bhu">
        <Container>
            <img src={s} alt='image' className='imged' style={{width:'100px', height:'50px', paddingRight:'19px'}} />
          <Navbar.Brand href="#home" style={{color:'black', fontWeight:'bold'}}>Cashify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: 'black', fontWeight:'bold'}}>Home</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'black', fontWeight:'bold'}}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: 'black', fontWeight:'bold'}}>About</Nav.Link>
              <Nav.Link as={Link} to="/login" style={{ color: 'black', fontWeight:'bold'}}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }
  
  export default BasicExample;