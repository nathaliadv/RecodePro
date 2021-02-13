import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Produto = ({ idProd, descricao, preco, precoVenda, imagem}) => {
    return (
        <View style={styles.container}>
            <Image source={require(`./imgs/${imagem}`)} style={{ width: 200, height: 200 }}/>
            <Text>{descricao}</Text>
            <Text style={{textDecorationLine:'line-through', fontSize:10}}>R$ {preco}</Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>R$ {precoVenda}</Text>
        </View>
    )
}

export default Produto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
    }
})