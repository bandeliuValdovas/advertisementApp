import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login')
  }
    

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">EGZ APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <NavDropdown title="Add" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addbook">Add Book</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Add Category
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant='success' onClick={()=>{goToLoginPage()}}>Login</Button>
            {/* <Button variant='danger' onClick={()=>{Logout()}}>Logout</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;