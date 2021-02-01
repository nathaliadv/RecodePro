import { Container, Form, FormGroup, Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function Cadastrar(props) {
    const [form, setForm ] = useState({
        nome: "", 
        sobrenome: "", 
        cpf: "",
        dataNasc: "",
        telefone: "",
        sexo: "",
        endereco: "",
        numero: "",
        complemento: "",
        cidade: "",
        estado: "",
        CEP:"",
        email: "",
        senha:"",
        checkOfertas: "",
        checkTermos: "",
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

        const url = "http://localhost/Recode/7_aulas_React_JS/php/api/cliente.php/";

        const dados = new FormData(evento.target);

        const opcoes = {
            method: "POST",
            body: dados,
        }

        const resposta = await fetch(url, opcoes);
        const resultado = await resposta.json();
        console.log(resultado.mensagem); 
        if (resultado.mensagem === "Método POST Efetuado"){
            alert('Cadastro realizado com sucesso!')
            props.history.push('/login');
        } else {
            alert('Esse CPF e/ou email já estão cadastrados!');
        }
        

    }
        

    return (
        <div>
            <h3 className="my-5">Área de Cadastro</h3>
            <Container className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <Form.Row>
                        <FormGroup as={Col} controlId="nome" >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={controleMudanca} name="nome" placeholder="Nome" required/>                    
                        </FormGroup>
                        <FormGroup as={Col} controlId="sobrenome">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control onChange={controleMudanca} name ="sobrenome" placeholder="Sobrenome" required />
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" name="cpf" placeholder="Apenas os dígitos" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="dataNascimento">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control onChange={controleMudanca} type="date" name="dataNascimento" placeholder="Data de Nascimento" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" name="telefone" placeholder="DDD+número" required />
                        </Form.Group>
                    </Form.Row>
                    <fieldset>
                        <Form.Group as={Row} controlId="sexo">
                            <Form.Label as="legenda" column sm={2} >
                                Gênero
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                value = "feminino"
                                label="Feminino"
                                id="feminino"
                                name="sexo"
                                onChange={controleMudanca}
                                />
                                <Form.Check
                                type="radio"
                                value = "masculino"
                                label="Masculino"
                                id="masculino"
                                name="sexo"
                                onChange={controleMudanca}
                                />
                                <Form.Check
                                type="radio"
                                value = "outro"
                                label="Prefiro não responder"
                                id="outro"
                                name="sexo"
                                onChange={controleMudanca}
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group controlId="endereco">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control onChange={controleMudanca} name="endereco" placeholder="Rua/Logradouro/Estrada/Avenida" required/>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="numero">
                            <Form.Label>Número</Form.Label>
                            <Form.Control onChange={controleMudanca} name="numero" type="text"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="complemento">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control onChange={controleMudanca} type="text" name="complemento" placeholder="Casa/Apt/Lote"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="cep">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control onChange={controleMudanca} name="cep" placeholder="Apenas dígitos" required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="bairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control onChange={controleMudanca} name="bairro" required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="cidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control onChange={controleMudanca} name="cidade" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="estado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control onChange={controleMudanca} name="estado" required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control onChange={controleMudanca} type="email" name="email" placeholder="E-mail" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="senha">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control onChange={controleMudanca} type="password" name="senha" placeholder="6 dígitos" required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group className="mt-3 mb-0" as={Row} controlId="checkOfertas">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check onChange={controleMudanca} name="checkOfertas" label="Desejo receber ofertas de produtos e serviços por e-mail" />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row} controlId="checkTermos">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check onChange={controleMudanca} name="checkTermos" label="Li e aceito a Política de privacidade." required/>
                            <p>Acesse o termo <a href="#">aqui</a></p>
                        </Col>
                    </Form.Group>
                    <Button variant="success" type="submit" block className="my-4">
                        Cadastrar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}