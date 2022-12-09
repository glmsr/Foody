import React, { useEffect } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import { TextButton } from "../../components";
import { images } from "../../constants";
import styles from "../../styles/Success.style";

const Success = ({ navigation }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.successContainer}>
        <Image source={images.success} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>Successfully ordered!</Text>
        <Text style={styles.description}>Thank you for shopping with us. Your delivery will arrive shortly.</Text>
      </View>
      <TextButton label="Done" buttonContainerStyle={styles.button} onPress={() => navigation.navigate("DeliveryStatus")} />
    </View>
  );
};

export default Success;
