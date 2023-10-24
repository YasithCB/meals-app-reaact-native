import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverview from "./screens/MealsOverview";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoryScreen} />
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
