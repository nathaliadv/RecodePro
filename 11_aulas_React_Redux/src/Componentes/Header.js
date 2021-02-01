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
                <Nav className="mr-auto">
                    <Nav.Item >
                        <Nav.Link as={Link} href="/carrinho" to="/carrinho">
                            <img  
                                src="../imgs/icon--shopping.png"         
                                width="40"
                                className="d-inline-block align-top"
                                alt="carrinho ícone"
                            />                        
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

const Header = withRouter(BaseHeader);

export default Header;
