import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const Loading = () => {
  return (
    <View style={styles.loadingWrap}>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default Loading;
