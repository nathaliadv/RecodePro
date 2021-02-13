import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Input from './Input';
import Botao from './Botao';
import Mensagem from './Mensagem';

import Formulario from '../../assets/formulario.jpg';

const Form = () => {
    return(
        <View style={styles.containerInput}>
            <Input placeholder="Nome completo" />
            <Input type='email-address' placeholder="E-mail" />
            <Input placeholder="Assunto" />
            <Mensagem />
            <Botao text="Enviar" />
        </View>
            
    )
}

export default Form;

const styles = StyleSheet.create({
    containerInput: {
        flex: '60%',
        alignItems: 'center',
        width: 300,
    },
});