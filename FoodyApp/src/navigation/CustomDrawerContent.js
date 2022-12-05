import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { constants, dummyData, icons } from '../constants';
import CustomDrawerItem from './CustomDrawerItem';
import auth from '@react-native-firebase/auth';
import styles from '../styles/CustomDrawer.style'

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {

    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={styles.drawerContent}>
            <View style={styles.drawerContentView1}>
                <View style={styles.drawerContentView2}>
                    <TouchableOpacity style={styles.drawerCrossButton} onPress={() => navigation.closeDrawer()}>
                        <Image source={icons.cross} style={styles.crossIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.profileButton} onPress={() => console.log('profile')}>
                    <Image source={icons.profile} style={styles.profileIcon} />
                    <View style={styles.profileView}>
                        <Text style={styles.profileText}>{dummyData.myProfile.name}</Text>
                        <Text style={styles.profileLink}>View your profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.drawerItemsContainer}>
                    <CustomDrawerItem label={constants.screens.home} icon={icons.home} isFocused={selectedTab === constants.screens.home}
                        onPress={() => { setSelectedTab(constants.screens.home); navigation.navigate('MainLayout') }} />
                    <CustomDrawerItem label={constants.screens.my_wallet} icon={icons.wallet} isFocused={selectedTab === constants.screens.my_wallet}
                        onPress={() => { setSelectedTab(constants.screens.my_wallet); navigation.navigate('MainLayout') }} />
                    <CustomDrawerItem label={constants.screens.notification} icon={icons.notification} isFocused={selectedTab === constants.screens.notification}
                        onPress={() => { setSelectedTab(constants.screens.notification); navigation.navigate('MainLayout') }} />
                    <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite} isFocused={selectedTab === constants.screens.favourite}
                        onPress={() => { setSelectedTab(constants.screens.favourite); navigation.navigate('MainLayout') }} />
                    <View style={styles.divider} />
                    <CustomDrawerItem label='Track Your Order' icon={icons.location} isFocused={false} />
                    <CustomDrawerItem label='Coupons' icon={icons.coupon} isFocused={false} />
                    <CustomDrawerItem label='Settings' icon={icons.setting} isFocused={false} />
                    <CustomDrawerItem label='Invite a Friends' icon={icons.profile} isFocused={false} />
                    <CustomDrawerItem label='Help Center' icon={icons.help} isFocused={false} />
                </View>
                <View style={styles.bottomDrawerItemsContainer}>
                    <CustomDrawerItem label='Logout' icon={icons.logout} isFocused={false} onPress={ handleLogout } />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
