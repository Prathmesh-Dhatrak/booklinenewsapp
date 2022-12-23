import { TouchableOpacity, Image, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

export default function LogoutBtn({ navigation }) {
  return (
    <TouchableOpacity
      style={{ padding: 10 }}
      onPress={() => {
        Alert.alert("Logout", "Do you want to logout", [
          {
            text: "Cancel",
            onPress: () => {
              return;
            },
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              SecureStore.deleteItemAsync("token").then(
                navigation.navigate("Auth")
              );
            },
          },
        ]);
      }}
    >
      <Image
        source={require("../../assets/logout.png")}
        style={styles.ImageIconStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ImageIconStyle: {
    width: 40,
    height: 20,
  },
});
