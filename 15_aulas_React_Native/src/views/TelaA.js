import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Menu from '../components/Menu'

const TelaA = (props) => {

    return (
        <View>
            <Menu navigation={props.navigation} /> 
            <View style={styles.container}>
                <Image source={require('../components/imgs/logo-removebg.png')} 
                    style={{ width: 100, height: 100, margin: 20 }}
                />
            </View>
            <View style={{backgroundColor: '#fff', alignItems:'center', justifyContent: 'center'}}>
                <Image source={require('../components/imgs/home.png')} 
                    style={{ width: 350, height: 350 }}
                />
            </View>

        </View>
    )
}

export default TelaA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#133ed8',
        alignItems: 'center',
    }

})

