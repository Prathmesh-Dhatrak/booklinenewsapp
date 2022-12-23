import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
const UserForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const styles = StyleSheet.create({
    form: {
      padding: 10,
    },
    styledInput: {
      borderWidth: 1,
      borderColor: "gray",
      borderStyle: "solid",
      fontSize: 18,
      padding: 8,
      marginBottom: 25,
    },
    formLabel: {
      fontSize: 15,
      fontWeight: "bold",
    },
    formBtn: {
      background: "#0077cc",
      width: "100%",
      padding: 8,
    },
    btnText: {
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
    },
  });

  const handleSubmit = () => {
    props.action(email, password);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.formLabel}>Email</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.styledInput}
        textContentType="emailAddress"
        autoCompleteType="email"
        autoFocus={true}
        autoCapitalize="none"
      />
      <Text style={styles.formLabel}>Password</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.styledInput}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button
        style={[styles.formBtn, styles.btnText]}
        title="Log In"
        onPress={handleSubmit}
      />
    </View>
  );
};
export default UserForm;
