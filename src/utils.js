import moment from "moment";
import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export default class Article {
  constructor(item, navigate) {
    this.context = item.source.name;
    this.title = item.title;
    this.subtext = moment(item.publishedAt).fromNow();

    if (item.urlToImage) this.image = item.urlToImage;

    if (navigate)
      this.onPress = () =>
        navigate("Article", { title: item.title, article: item });
  }
}
