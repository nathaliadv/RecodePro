import {  Col, Row, Container, Form, Button, InputGroup } from 'react-bootstrap';
import icone_email from '../Componentes/imgs/email.png';
import icone_wpp from '../Componentes/imgs/wpp.jpg';
import { useState } from 'react';

export default function Contatos(props)  {
    const [form, setForm ] = useState({
        nome: "", 
        email: "",
        assunto:"",
        mensagem: "",
    })
    const [response, setResponse] = useState(null);


    const controleMudanca = ({target}) => {
       const { id, value } = target;
       setForm({ ...form, [id]: value });
       console.log(form)
    }
    
    const controleEnvio = async (evento) => {
        evento.preventDefault();
        const url = "http://localhost:1910/mensagem";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Transformando nosso dado em JSON
            body: JSON.stringify(form),
            }).then((res) => {
                setResponse(res);
        });
    alert('Mensagem enviada com sucesso!');
    props.history.push('/');
    }



    return (
        <div>
            <h3 className="my-5">Fale Conosco</h3>
            <Container className="col-lg-6 col-md-6 mx-auto mb-5">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <img src={icone_email} width="50px" alt="ícone de e-mail"/>
                        contato@fullstackeletro.com  
                    </Col>
                    <Col md="auto">
                        <img src={icone_wpp} width="50px" alt="ícone do whatsapp"/>
                        (11) 99999-9999  
                    </Col>
                </Row>
                <Container >
                    <Form className="my-5" onSubmit={controleEnvio} >
                        <Form.Group controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control name="nome" id="nome" placeholder="Nome" onChange={controleMudanca} required/> 
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" id="email" placeholder="E-mail" onChange={controleMudanca} required/>
                        </Form.Group>
                        <Form.Group controlId="assunto">
                            <Form.Label>Assunto: </Form.Label>
                            <Form.Control as="select" name="assunto" id="assunto" defaultValue="Escolha uma opção" onChange={controleMudanca}>
                                <option >Escolha uma opção</option>
                                <option value="crítica">Crítica</option>
                                <option value="elogio">Elogio</option>
                                <option value="informação">Informação</option>
                                <option value="sugestão">Sugestão</option>
                                <option value="outro">Outro</option> 
                            </Form.Control>
                        </Form.Group>
                        <InputGroup id="mensagem">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Mensagem</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control as="textarea" name="mensagem" id="mensagem" aria-label="mensagem" onChange={controleMudanca} />
                        </InputGroup>
                        <Button variant="success" type="submit" block className="my-4">
                            Enviar
                        </Button>
                    </Form>
                </Container>
            </Container>
        </div>  
    );
}
