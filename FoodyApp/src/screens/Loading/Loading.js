import React from 'react';
import { ActivityIndicator, Text, View } from "react-native";
import styles from '../../styles/Loading.style';
const Loading = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator color="#0000ff" />
    </View>
  )
}

export default Loading;
