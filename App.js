import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Appearance,
  useColorScheme,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import MenuDrawer from "./src/components/MenuDrawer";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MenuDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
