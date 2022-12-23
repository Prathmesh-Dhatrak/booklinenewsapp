import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//IMPORT SCENES
import HomeScreen from "./screen/Home";
import ArticlesScreen from "./screen/Articles";
import ArticleScreen from "./screen/Article";
import AuthLoading from "./screen/authloading";
import Login from "./screen/Login";
import Settings from "./screen/settings";
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

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Articles: ArticlesScreen,
  Article: ArticleScreen,
  Settings: Settings,
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
