import React from "react";
import Moment from "moment";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Linking,
  Button,
} from "react-native";

export default function Article(props) {
  Moment.locale("en");
  const { navigation } = props;
  const article = navigation.getParam("article");

  return (
    <View style={styles.articleContainer}>
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
          <Text style={{ color: "#A5A5A4", paddingTop: 8, fontSize: 12 }}>
            PUBLISHED : {Moment(article.publishedAt).format("MMMM d, YYYY")}
          </Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.subtext}>
            {`KEY POINT : `}
            {article.description}
          </Text>
        </View>
        <Text style={styles.content}>{article.content}</Text>
        <View style={styles.infoContainer}>
          <Button
            title="read more"
            style={{ color: "white !important" }}
            onPress={() => {
              Linking.openURL(article.url);
            }}
          />
        </View>
      </View>
    </View>
  );
}

Article.navigationOptions = ({ navigation }) => {
  return {
    title: `Article`,
  };
};

let font = Platform.OS === "ios" ? "HelveticaNeue" : "Roboto";
let MIN_HEIGHT = 210;

const styles = StyleSheet.create({
  articleContainer: {
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  imageContainer: {
    backgroundColor: "#eee !important",
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
    color: "#fff !important",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: font,
    lineHeight: 30,
  },

  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: font,
    color: "#fff !important",
  },

  subtext: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: font,
    color: "#A5A5A4",
  },
});
