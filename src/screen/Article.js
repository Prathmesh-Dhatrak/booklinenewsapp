import React from "react";
import { ActivityIndicator } from "react-native";
import Moment from "moment";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
} from "react-native";

export default function Article(props) {
  Moment.locale("en");
  const { navigation } = props;
  const article = navigation.getParam("article");
  console.log(article);

  //==================================================================================================

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: article.urlToImage,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View
          style={{
            paddingVertical: 10,
            borderBottomColor: "#005594",
            borderBottomWidth: 6,
          }}
        >
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={{ color: "#A5A5A4", paddingTop: 5 }}>
            PUBLISHED : {Moment(article.publishedAt).format("MMMM d, YYYY")}
          </Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text>
            KEY POINTS :
            <Text style={styles.subtext}>{article.description}</Text>
          </Text>
        </View>
        <Text style={styles.content}>{article.content}</Text>
      </View>
    </View>
  );
}

Article.navigationOptions = ({ navigation }) => {
  return {
    title: `${navigation.getParam("title")}`,
  };
};

let font = Platform.OS === "ios" ? "HelveticaNeue" : "Roboto";
let MIN_HEIGHT = 210;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "#c2c4cb",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.81,
    shadowRadius: 5.16,
    elevation: 20,
    padding: 20,
  },

  imageContainer: {
    backgroundColor: "#eee",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
  },

  infoContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "flex-start",
    alignContent: "center",
  },

  image: {
    height: MIN_HEIGHT,
  },

  content: {
    color: "#ffff !important",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: font,
  },

  articleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: font,
    color: "#ffff !important",
  },

  subtext: {
    fontSize: 15,
    fontWeight: "400",
    fontFamily: font,
    color: "#A5A5A4",
  },
});
