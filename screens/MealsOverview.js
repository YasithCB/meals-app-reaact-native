import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";

export default function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;

  useEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id == catId).title;
    navigation.setOptions({ title: catTitle });
  }, [route, navigation]);

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <MealItem meal={itemData.item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
