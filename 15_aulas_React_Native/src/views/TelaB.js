import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Menu from '../components/Menu'
import Produtos from '../produtos' 
import Produto from '../components/Produto'

const produtos = Produtos;
console.log(produtos)

const TelaB = (props) => {

    return (
        <View style={{flex:1, backgroundColor: '#fff'}}>
            <Menu navigation={props.navigation} />
            <View style={styles.container}>
                <Text style={styles.h1}>
                    Nossos produtos
                </Text>
            </View>
            <View style={styles.containerProdutos}>
                <FlatList 
                    data = {produtos}
                    keyExtractor={(item) => `${item.idProd}`}
                    renderItem={({item}) => (
                        <Produto 
                            imagem={item.imagem} 
                            descricao={item.descricao} 
                            preco={item.preco} 
                            precoVenda={item.precoVenda} 
                        />
                    )}
                />
            </View> 
        </View>
    )
}

export default TelaB

const styles = StyleSheet.create({
    container:{
        flex: '20%',
        alignItems: 'center',
    },
    h1: {
        fontSize: 30,
        margin:10,
        fontWeight: 'bold',
    },
    containerProdutos: {
        flex: '80%',
        alignItems: 'center',
    }
});
