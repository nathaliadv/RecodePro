import { CardColumns, Container, Card} from 'react-bootstrap';
import loja1 from '../Componentes/imgs/loja1.jpg';
import loja2 from '../Componentes/imgs/loja2.jpg';
import loja3 from '../Componentes/imgs/loja3.jpg';

export default function Lojas()  {
    return (
        <div>
            <h3 className="my-5">Lojas</h3>
            <Container>
                <CardColumns className="text-center">
                    <Card>
                        <Card.Img src={loja1} variant="top" alt ="Imagem da Loja do RJ" />
                        <Card.Body>
                            <Card.Title>Rio de Janeiro</Card.Title>
                            <Card.Text>Avenida Pres. Vargas, 5000 - 10° andar</Card.Text>
                            <Card.Text>Centro</Card.Text>
                            <Card.Text>(21) 3333-3333</Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img src={loja2} variant="top" alt ="Imagem da Loja do SP" />
                        <Card.Body>
                            <Card.Title>São Paulo</Card.Title>
                            <Card.Text>Avenida Paulista, 985 - 3° andar</Card.Text>
                            <Card.Text>Jardins</Card.Text>
                            <Card.Text>(11) 4444-4444</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={loja3} variant="top" alt ="Imagem da Loja de SC" />
                        <Card.Body>
                            <Card.Title>Santa Catarina</Card.Title>
                            <Card.Text>Rua Major Ávila, 370</Card.Text>
                            <Card.Text>Vila Mariana</Card.Text>
                            <Card.Text>(47) 5555-5555</Card.Text>
                        </Card.Body>

                    </Card>
                </CardColumns>
            </Container>
        </div>
        
    );
}