import {
  StyleSheet,
  Text,
  View,
  Appearance,
  useColorScheme,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/HomeScreen";
const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "left",
        headerTintColor: colorScheme === "light" ? "#242c40" : "#d0d0c0",
        headerStyle: {
          backgroundColor: colorScheme === "light" ? "#d0d0c0" : "#242c40",
        },

        headerShadowVisible: false,
        drawerStyle: {
          backgroundColor: colorScheme === "light" ? "#d0d0c0" : "#242c40",
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});
