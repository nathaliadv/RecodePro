import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

const Menu = (props) => {
    return (
        <View style ={styles.containerMenu}>
                <TouchableOpacity onPress={() => {
                    props.navigation.openDrawer();
                    setTimeout(() => {
                        props.navigation.closeDrawer();
                    }, 3000)
                }}>
                    <Image source={require('./imgs/menu.svg')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    containerMenu: {
        justifyContent:'flex-end',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#133ed8'
    }
})