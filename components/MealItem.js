import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function MealItem({ meal }) {
  return (
    <View style={styles.screen}>
      <Pressable>
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
    width: '100%',
    height: 200,
  },
});
