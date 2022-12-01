import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { constants, dummyData, icons } from '../constants';
import styles from '../styles/CustomDrawer.style'
import CustomDrawerItem from './CustomDrawerItem';

const CustomDrawerContent = ({ props }) => {
    return (
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={styles.drawerContent}>
            <View style={styles.drawerContentView1}>
                <View style={styles.drawerContentView2}>
                    <TouchableOpacity style={styles.drawerCrossButton} onPress={() => props.navigation.closeDrawer()}>
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
                    <CustomDrawerItem label={constants.screens.home} icon={icons.home} isFocused={true} />
                    <CustomDrawerItem label={constants.screens.my_wallet} icon={icons.wallet} isFocused={true} />
                    <CustomDrawerItem label={constants.screens.notification} icon={icons.notification} isFocused={true} />
                    <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite} isFocused={true} />
                    <View style={styles.divider} />
                    <CustomDrawerItem label='Track Your Order' icon={icons.location} isFocused={true} />
                    <CustomDrawerItem label='Coupons' icon={icons.coupon} isFocused={true} />
                    <CustomDrawerItem label='Settings' icon={icons.setting} isFocused={true} />
                    <CustomDrawerItem label='Invite a Friends' icon={icons.profile} isFocused={true} />
                    <CustomDrawerItem label='Help Center' icon={icons.help} isFocused={true} />
                </View>
                <View style={styles.bottomDrawerItemsContainer}>
                    <CustomDrawerItem label='Logout' icon={icons.logout} isFocused={true} />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent