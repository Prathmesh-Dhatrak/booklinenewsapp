import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//IMPORT SCENES
import HomeScreen from "./screen/Home";
import ArticlesScreen from "./screen/Articles";
import ArticleScreen from "./screen/Article";

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
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle,
      headerTitleStyle,
    }),
  }
);

//ROUTER ====================================================
const Router = createAppContainer(HomeStack);
export default Router;

