import React from "react";
import { View, Button, Text } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import UserForm from "../components/UserForm";
const Login = (props) => {
  const [error, setError] = useState("");
  const storeToken = (email, password) => {
    setError("");
    if (email === "test@gmail.com" && password === "123") {
      SecureStore.setItemAsync("token", "abc").then(
        props.navigation.navigate("App")
      );
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <View>
      <UserForm action={storeToken} />
      <Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>
        {error}
      </Text>
    </View>
  );
};
Login.navigationOptions = {
  title: "Login",
};
export default Login;
