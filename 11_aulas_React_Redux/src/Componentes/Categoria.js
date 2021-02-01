import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function Categoria() {   
    const [categoria, setCategoria] = useState('');
    

    const filtrar = (evento) => {
        setCategoria(evento.target.value); 
    }
    console.log(categoria); 
       
    return (
        <ListGroup variant="flush" className= "categorias">
            <ListGroup.Item action variant="light" value="" onClick={filtrar}>Mostrar tudo</ListGroup.Item>
            <ListGroup.Item action variant="light" value="geladeira" onClick={filtrar}>Geladeiras</ListGroup.Item>
            <ListGroup.Item action variant="light" value="fogao" onClick={filtrar}>Fogões</ListGroup.Item>
            <ListGroup.Item action variant="light" value="microondas" onClick={filtrar}>Micro-ondas</ListGroup.Item>
            <ListGroup.Item action variant="light" value="lavaLoucas" onClick={filtrar}>Lavadoras de roupas</ListGroup.Item>
            <ListGroup.Item action variant="light" value="lavadoraRoupas" onClick={filtrar}>Lava-louças</ListGroup.Item>
        </ListGroup>
    )
        
}