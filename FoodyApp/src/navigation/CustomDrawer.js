import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import CustomDrawerContent from './CustomDrawerContent';
import styles from '../styles/CustomDrawer.style';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {

    return (
        <View style={styles.container}>
            <Drawer.Navigator drawerType="slide" overlayColor="transparent" drawerStyle={styles.drawerStyles} sceneContainerStyle={styles.sceneContainerStyle}
                drawerContent={props => {
                    return (<CustomDrawerContent navigation={props.navigation} />)
                }} initialRouteName="Home" >
                <Drawer.Screen name="Home">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer