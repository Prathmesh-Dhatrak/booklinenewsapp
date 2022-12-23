import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Alert } from "react-native";
import logout from "./utils/Logout";

import * as SecureStore from "expo-secure-store";
//IMPORT SCENES
import HomeScreen from "./screen/Home";
import ArticlesScreen from "./screen/Articles";
import ArticleScreen from "./screen/Article";
import AuthLoading from "./screen/AuthLoading";
import Login from "./screen/Login";
import LogoutBtn from "./components/LogoutBtn";
//ROUTES CONFIG ====================================================

let font = "Roboto";
let titleColor = "#363434";

//Nav Header Styles
let headerStyle = { backgroundColor: "#fff" };
let headerTitleStyle = {
  fontWeight: "bold",
  fontSize: 17,
  fontFamily: font,
  color: titleColor,
};

//ROUTES STACK ====================================================

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Articles: ArticlesScreen,
    Article: ArticleScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle,
      headerTitleStyle,
      headerRight: () => <LogoutBtn navigation={navigation} />,
    }),
  }
);
const styles = StyleSheet.create({
  ImageIconStyle: {
    width: 40,
    height: 20,
  },
});
const AuthStack = createStackNavigator({
  Login: Login,
});

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: AuthStack,
    App: HomeStack,
  },
  {
    initialRouteName: "AuthLoading",
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle,
      headerTitleStyle,
    }),
  }
);

//ROUTER ====================================================
const Router = createAppContainer(SwitchNavigator);
export default Router;
