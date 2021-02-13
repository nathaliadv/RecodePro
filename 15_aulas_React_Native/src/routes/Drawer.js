import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const routeDrawer = createDrawerNavigator()

const Drawer = () => {
    return (
        <routeDrawer.Navigator initialRouteName="TelaA">
            <routeDrawer.Screen name="Página Inicial" component={TelaA} />
            <routeDrawer.Screen name="Produtos" component={TelaB} />
            <routeDrawer.Screen name="Fale Conosco" component={TelaC} />
        </routeDrawer.Navigator>
    )
}

export default Drawer
