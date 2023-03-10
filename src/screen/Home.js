import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-virtualized-view";
import Loading from "../components/Loading";
import * as api from "../api";
import { addHeadlines } from "../actions";
import Article from "../utils";

import PanelItem from "../components/PanelItem";
import Panel from "../components/Panel";

export default function Home(props) {
  const dispatch = useDispatch();
  const { navigate } = props.navigation;

  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const newsReducer = useSelector(({ newsReducer }) => newsReducer);
  const {
    business,
    entertainment,
    general,
    health,
    science,
    sports,
    technology,
  } = newsReducer;


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsFetching(true);

    try {
      let data = await api.getHeadlines();
      dispatch(addHeadlines(data));
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  }

  const renderItem = (
    size = "small",
    horizontal = false,
    grid = false,
    wrapper = true
  ) => {
    return ({ item, index }) => {
      let article = new Article(item, navigate);
      return (
        <PanelItem
          {...article}
          size={size}
          horizontal={horizontal}
          grid={grid}
          wrapper={wrapper}
        />
      );
    };
  };

  const onCTAPress = (category) => navigate("Articles", { category });

  if (isFetching) return <Loading />;
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>{`${error.message}`}</Text>
        <Text
          style={{ color: "blue", fontSize: 16, padding: 8 }}
          onPress={getData}
        >
          Tap to retry
        </Text>
      </View>
    );
  }

  let renderGridItem = renderItem("small", false, true, false);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Panel
        title={"Business"}
        cols={2}
        data={business.articles.slice(0, 4)}
        renderItem={renderGridItem}
        showDivider={false}
        onCTAPress={() => onCTAPress("Business")}
      />

      <Panel
        title={"Entertainment"}
        cols={2}
        data={entertainment.articles.slice(0, 4)}
        renderItem={renderGridItem}
        showDivider={false}
        onCTAPress={() => onCTAPress("Entertainment")}
      />

      <Panel
        title={"General"}
        cols={2}
        data={general.articles.slice(0, 4)}
        renderItem={renderGridItem}
        showDivider={false}
        onCTAPress={() => onCTAPress("General")}
      />

      <Panel
        title={"Health"}
        cols={2}
        data={health.articles.slice(0, 4)}
        renderItem={renderGridItem}
        showDivider={false}
        onCTAPress={() => onCTAPress("Health")}
      />

      <Panel
        title={"Science"}
        cols={2}
        data={science.articles.slice(0, 4)}
        renderItem={renderGridItem}
        showDivider={false}
        onCTAPress={() => onCTAPress("Science")}
      />

      <Panel
        title={"Sports"}
        cols={2}
        data={sports.articles.slice(0, 4)}
        renderItem={renderGridItem}
        showDivider={false}
        onCTAPress={() => onCTAPress("Sports")}
      />

      <Panel
        title={"Technology"}
        cols={2}
        data={technology.articles.slice(0, 4)}
        renderItem={renderGridItem}
        showDivider={false}
        onCTAPress={() => onCTAPress("Technology")}
      />
    </ScrollView>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return { title: `BooklineNews` };
};
