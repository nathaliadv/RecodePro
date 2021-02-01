import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function Categoria() {   
    const [categoria, setCategoria] = useState('');
    

    const filtraCategoria = (evento) => {
        setCategoria(evento.target.value); 
    }
    console.log(categoria); 
       
    return (
        <ListGroup variant="flush" className= "categorias">
            <ListGroup.Item action variant="light" value="" onClick={filtraCategoria}>Mostrar tudo</ListGroup.Item>
            <ListGroup.Item action variant="light" value="geladeira" onClick={filtraCategoria}>Geladeiras</ListGroup.Item>
            <ListGroup.Item action variant="light" value="fogao" onClick={filtraCategoria}>Fogões</ListGroup.Item>
            <ListGroup.Item action variant="light" value="microondas" onClick={filtraCategoria}>Micro-ondas</ListGroup.Item>
            <ListGroup.Item action variant="light" value="lavaLoucas" onClick={filtraCategoria}>Lavadoras de roupas</ListGroup.Item>
            <ListGroup.Item action variant="light" value="lavadoraRoupas" onClick={filtraCategoria}>Lava-louças</ListGroup.Item>
        </ListGroup>
    )
        
}