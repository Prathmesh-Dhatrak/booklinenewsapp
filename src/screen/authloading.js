import { useEffect } from "react";
import Loading from "../components/Loading";
import * as SecureStore from "expo-secure-store";
const AuthLoading = (props) => {
  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync("token");
    props.navigation.navigate(userToken ? "App" : "Auth");
  };
  useEffect(() => {
    checkLoginState();
  });
  return <Loading />;
};
export default AuthLoading;
