import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const OrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 1300);
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your Order Has been Recieved
      </Text>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
