import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverview from "./screens/MealsOverview";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealDetails from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <NavigationContainer>
        {/* <BottomTab.Navigator initialRouteName="Categories">
          <BottomTab.Screen name="Categories" component={CategoryScreen} />
          <BottomTab.Screen
            name="Meals Overview"
            component={MealsOverview}
            options={{
              headerRight: () => {
                return (
                  <Button
                    title="Press Me"
                    onPress={() => console.log("pressed header button...")}
                  />
                );
              },
              categoryId:'as'
            }}
          />
          <BottomTab.Screen name="Meal Details" component={MealDetails} />
        </BottomTab.Navigator> */}

        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverview}
            options={{
              headerRight: () => {
                return (
                  <Button
                    title="Press Me"
                    onPress={() => console.log("pressed header button...")}
                  />
                );
              },
            }}
          />
          <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
