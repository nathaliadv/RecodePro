import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Login(props)  {
    const [form, setForm ] = useState({
        email: "",
        senha:"",
    })

    const controleMudanca = (evento) => {
        //console.log(evento.target.value);

        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();

        const url = "http://localhost/Recode/7_aulas_React_JS/php/api/login.php/";

        const dados = new FormData(evento.target);

        const opcoes = {
            method: "POST",
            body: dados,
        }

        const resposta = await fetch(url, opcoes);
        const resultado = await resposta.json();
        console.log(resultado.mensagem); 
        if (resultado.mensagem === "Ok"){
            props.history.push('/');
        } else {
            alert('E-mail e/ou senha inválidos!');
        }

    }


    return (
        <div>
            <h3 className="my-5">Login</h3>
            <Container className="text-center">
                <Form className="col-lg-6 col-md-6 mx-auto" onSubmit={controleEnvio}>
                    <Form.Group as={Row} controlId="email">
                        <Form.Label column sm={2}>
                        E-mail
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" name="email" placeholder="E-mail" onChange={controleMudanca} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="senha">
                        <Form.Label column sm={2}>
                        Senha
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="password" name="senha" placeholder="6 dígitos" onChange={controleMudanca} required/>
                        </Col>
                    </Form.Group>
                    <Button className="mt-3" variant="success" type="submit" block>Entrar</Button>
                    <p className="forgot-password mt-3">
                        Esqueci minha <a href="#">senha</a>
                    </p>
                    <p className="cadastrar mt-3">
                        Ainda não possui cadastro?
                        <a href="/cadastro"> Clique aqui para se cadastrar</a>
                    </p>
                </Form>
            </Container>
        </div>
    );
}