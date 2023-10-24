import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverview from "./screens/MealsOverview";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Categories">
          <Drawer.Screen name="Categories" component={CategoryScreen} />
          <Drawer.Screen
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
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
