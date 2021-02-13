import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({ type, placeholder }) => {
    return (
        <View style={styles.input}> 
            <TextInput keyboardType={type}  placeholder={placeholder} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: "#fff",
        color: 'black',
        alignSelf: 'stretch',
        marginTop: 5,
        fontSize: 15,
    }
})
