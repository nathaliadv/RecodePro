import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Menu from '../components/Menu'
import Form from '../components/Form'

const TelaC = (props) => {
    return (
        <View >
            <Menu navigation={props.navigation} />
            <View style={styles.container}>
                <Text style={styles.h1}>
                    Fale Conosco
                </Text>
                <View style={styles.contatos}>
                    <View style={styles.contato}>
                        <Image source={require('../components/imgs/wpp.jpg')} style={{ width: 40, height: 40 }} />
                        <Text style={{margin: 10}}>(21)99999-9999</Text>
                    </View>
                    <View style={styles.contato}>
                    <Image source={require('../components/imgs/email.png')}  style={{ width: 40, height: 40 }} />
                        <Text style={{margin: 10}}>fseletro@email.com</Text>
                    </View>
                </View>
                <Form />
            </View>
            
        </View>
        
    )
}

export default TelaC

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    contato: {
        flex: 1,
        flexDirection: 'row',
    },
    contatos: {
        marginBottom: 10,
        marginTop: 10,
    },
    h1: {
        fontSize: 30,
        margin:10,
        fontWeight: 'bold',
    }
});