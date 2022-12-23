import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screen/Home";
import ArticlesScreen from "./screen/Articles";
import ArticleScreen from "./screen/Article";
import AuthLoading from "./screen/AuthLoading";
import Login from "./screen/Login";
import LogoutBtn from "./components/LogoutBtn";
let font = "Roboto";
let titleColor = "#363434";

let headerStyle = { backgroundColor: "#fff" };
let headerTitleStyle = {
  fontWeight: "bold",
  fontSize: 17,
  fontFamily: font,
  color: titleColor,
};


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

const Router = createAppContainer(SwitchNavigator);
export default Router;
