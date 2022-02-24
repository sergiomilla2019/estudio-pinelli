import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Clientes } from '../pages/Clientes';
import { Quienes } from '../pages/Quienes';
import { Footer } from '../components/Footer';


export const Navigation = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/quienes">Quienes somos</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
            
            <Nav.Link href="/register">Contacto</Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className="container mt-4">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/clientes">
            <Clientes />
          </Route>
          <Route path="/quienes">
            <Quienes />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}