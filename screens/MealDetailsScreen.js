import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailsScreen({ route }) {
  const meal = route.params.meal;
  // const favMealCtx = useContext(FavoriteContext);

  const favMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((mealItem) => mealItem.id === meal.id);

  const isMealFav = favMealsIds.includes(selectedMeal.id);

  function toggleFav() {
    if (isMealFav) {
      // favMealCtx.removeFavorite(selectedMeal.id);
      dispatch(removeFavorite({ id: selectedMeal.id }));
    } else {
      // favMealCtx.addFavorite(selectedMeal.id);
      dispatch(addFavorite({ id: selectedMeal.id }));
    }

    console.log(isMealFav);
  }

  return (
    <View>
      <Text>{meal.title}</Text>
      <Text>
        {isMealFav
          ? "This meal is a favorite one"
          : "This meal is not a favorite one"}
      </Text>
      <Button title="fav" onPress={toggleFav} />
    </View>
  );
}

const styles = StyleSheet.create({});
