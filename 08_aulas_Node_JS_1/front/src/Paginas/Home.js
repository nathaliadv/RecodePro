import {  Container, Row, Carousel } from 'react-bootstrap';
import imgPrinc from '../Componentes/imgs/pagInicial.gif';
import imgSec from '../Componentes/imgs/pagInicial2.gif';
import imgTerc from '../Componentes/imgs/pagInicial3.png';

export default function Home()  {
    return (
        <Container> 
            <Row className="my-5">
                
            </Row>
            <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgPrinc}
                    alt="primeiro slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgSec}
                    alt="segundo slide"
                    />
                    <Carousel.Caption>
                    <h3>Dezembro de Ofertas</h3>
                    <p>Venha conferir nossas ofertas de fim de ano!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgTerc}
                    alt="terceiro slide"
                    />
                    <Carousel.Caption>
                    <h3>Clique e retire!</h3>
                    <p>Na FullStackEletro você pode realizar sua compra online e retirar em uma loja mais próxima.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                     
        </Container>

    );
}