import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Button,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummyData";

export default function CategoryScreen({ navigation }) {
  function onPressCategory(itemData) {
    navigation.navigate("Meals Overview", { categoryId: itemData.item.id });
  }

  function renderCategoryTile(itemData) {
    return (
      <View style={styles.gridItem}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.btnPressed : null,
          ]}
          onPress={onPressCategory.bind(this, itemData)}
        >
          <View
            style={[styles.innerText, { backgroundColor: itemData.item.color }]}
          >
            <Text style={styles.title}>{itemData.item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  }

  function openDrawer() {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderCategoryTile}
      />
      <Button title="Open Drawer" onPress={openDrawer} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 16,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 100,
    borderRadius: 8,
    elevation: 3,
  },
  button: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
  },
  innerText: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
