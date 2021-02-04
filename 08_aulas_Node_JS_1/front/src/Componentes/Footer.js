import { Container, Row, Col }from 'react-bootstrap'
import '../Estilos/Footer.css';
import pagamento from './imgs/forma-de-pagamento.png'


export default function Footer(){
    return (
        <Container fluid className="footer text-center mb-0 pb-0 mt-5 pt-5" >
            <Row>
                <Col>
                    <p><b>FORMAS DE PAGAMENTO</b></p>
                    <img src={pagamento} alt="Imagem com diferentes formas de pagamento."></img>
                </Col>
                <Col>   
                    <p><b>ACOMPANHE NOSSAS REDES SOCIAIS</b></p>
                    <a href="https://www.instagram.com/" target="_blank">Instagram</a> |
                    <a href="https://www.facebook.com/" target="_blank">Facebook</a> |
                    <a href="https://www.twitter.com/" target="_blank">Twitter</a>
                </Col>
            </Row>
            <Row className="text-center mt-3 mb-0">
                <Col><p id="copyright">&copy;Nathalia Dantas - RecodePro</p></Col>
            </Row>
        </Container>
    )
}