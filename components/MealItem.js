import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({ meal }) {
  const navigation = useNavigation();

  function onPressItem() {
    navigation.navigate("Meal Details", { title: meal.title });
  }

  return (
    <View style={styles.screen}>
      <Pressable onPress={onPressItem}>
        <View>
          <Image source={require("../assets/img-1.jpg")} style={styles.image} />
          <Text>{meal.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
