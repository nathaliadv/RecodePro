import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Botao = ({ text }) => {
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Botao;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical:10,
        width: 150,
        height: 30,
        borderRadius:10,
        margin: 10,
    },
    text: {
        fontSize: 10,
        color: '#fff',
    }
})