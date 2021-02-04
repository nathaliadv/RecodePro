import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import '../Estilos/Header.css';


function BaseHeader (props){
    const { location } = props;


    return (
        <Navbar variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/" className="ml-5">
                <img  
                    src="../imgs/logo-removebg.png"         
                    width="180"
                    className="d-inline-block align-top"
                    alt="FullStackEletro logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="items-menu" />
            <Navbar.Collapse id="items-menu" >
                <Nav activeKey= {location.pathname} className="mx-auto mr-3" >
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link as={Link} href="/lojas" to="/lojas">Lojas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contatos" to="/contatos">Fale Conosco</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form inline>
                        <Form.Control type="text" placeholder="Pesquisar" className="mr-sm-2 my-2" />
                        <Button variant="outline-light" type="submit">Pesquisar</Button>
                </Form>
            </Navbar.Collapse>

        </Navbar>
    )
}

const Header = withRouter(BaseHeader);

export default Header;