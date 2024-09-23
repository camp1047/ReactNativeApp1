import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ListPage from "./pages/ListPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage}
         options={{ headerShown: false }} 
         />
        <Stack.Screen name="About" component={AboutPage} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen name="List" component={ListPage} 
        options={{ headerShown: false }} //i just didn't like how it looked and wanted to make a simple back button without the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
});
