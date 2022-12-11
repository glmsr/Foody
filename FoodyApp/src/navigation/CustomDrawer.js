import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';
import CustomDrawerContent from './CustomDrawerContent';
import styles from '../styles/CustomDrawer.style';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {

    return (
        <View style={styles.container}>
            <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainLayout" drawerType="slide" overlayColor="transparent" drawerStyle={styles.drawerStyles} sceneContainerStyle={styles.sceneContainerStyle}
                drawerContent={props => {
                    return (<CustomDrawerContent navigation={props.navigation} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />)
                }}  >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

const mapStateToProps = state => ({
  selectedTab: state.tabReducer.selectedTab
});

const mapDispatchToProps = dispatch => ({
  setSelectedTab: (selectedTab) => {
    return dispatch(setSelectedTab(selectedTab))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
