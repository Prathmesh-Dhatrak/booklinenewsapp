import React, { useEffect } from "react";
import { FlatList, StyleSheet, View, Text, Platform } from "react-native";

export default function Panel(props) {
  const { title, titleStyle, ctaText, onCTAPress } = props;
  const { style, cols } = props;

  let Component = GridView;

  return (
    <View
      style={[
        styles.container,
        style,
        { borderBottomColor: "#006694", borderBottomWidth: 1 },
      ]}
    >
      {title && (
        <Header
          title={title}
          style={titleStyle}
          ctaText={ctaText}
          onPress={onCTAPress}
        />
      )}
      <Component {...props} />
    </View>
  );
}

const Header = ({ title, ctaText, onPress, style }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionHeaderText, style]}>{title}</Text>
      {onPress && (
        <Text style={[style, styles.cta]} onPress={onPress}>
          {ctaText}
        </Text>
      )}
    </View>
  );
};

export const dividerColor =
  StyleSheet.hairlineWidth < 1 ? "#bcbbc1" : "rgba(0, 0, 0, 0.12)";
export const dividerStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: dividerColor,
};

const GridView = ({ title, cols, data, renderItem, showDivider }) => {
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      numColumns={cols > 2 ? 2 : cols} 
      renderItem={(props) => {
        return (
          <View
            style={[
              cols > 1 ? styles.multiCol : styles.singleCol,
              showDivider && dividerStyle,
            ]}
          >
            {renderItem(props)}
          </View>
        );
      }}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      listKey={(item, index) => `Grid_${title}${index.toString()}`}
      keyExtractor={(item, index) => `Grid_${title}${index.toString()}`}
    />
  );
};

Panel.defaultProps = {
  data: [],
  renderItem: () => alert("Render Item function not declared"),
  style: {},

  title: null,
  titleStyle: {},
  ctaText: "View All",
  onCTAPress: null,
  cols: 0,
  showDivider: true,
};

let font = Platform.OS === "ios" ? "HelveticaNeue" : "Roboto";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },

  singleCol: { paddingVertical: 8 },

  multiCol: { flex: 1, flexDirection: "column", padding: 8 },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8 * 1.5,
  },

  sectionHeaderText: {
    color: "#363434",
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: font,
    flex: 1,
  },

  cta: {
    color: "#D1644F",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: font,
  },
});
