import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  useColorScheme,
} from "react-native";
import axios from "axios";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const [responseText, setResponseText] = React.useState("");
  const [toggleSwitch, setToggleSwitch] = React.useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  /*   const handleRequest = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setResponseText(response.data.title);
    } catch (error) {
      console.error(error);
    }
  };

 */

  const handleToggleSwitch = async () => {
    try {
      setToggleSwitch(!toggleSwitch);
      const stateType = isLightOn ? "0" : "1";
      await axios.post(
        "https://script.google.com/macros/s/AKfycby_yMxZu22WIgJb8z328NsFYB8Eo1PSmLElFqNYaURfzwhBN7usHmzIC2zIGfzrxx-F4Q/exec",
        stateType
      );
      await updateLightState();
    } catch (error) {
      console.error(error);
    }
  };

  const updateLightState = async () => {
    try {
      setIsLightOn(isLightOn ? "0" : "1");
      const response = await axios.get(
        "https://script.google.com/macros/s/AKfycby_yMxZu22WIgJb8z328NsFYB8Eo1PSmLElFqNYaURfzwhBN7usHmzIC2zIGfzrxx-F4Q/exec",
        { redirect: "follow" }
      );
      setIsLightOn(Number(response.data) !== 0);
      setResponseText(response.data);
      if (response.data == 1) {
        setToggleSwitch(true);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.wrap, themeContainerStyle]}>
      <View style={[styles.toggleContainer, themeContainerStyle]}>
        <Text style={[styles.toggleText, themeTextStyle]}>
          {isLightOn ? "Light is On" : "Light is Off"}
        </Text>
        {/* <Text style={styles.toggleText}>{responseText}</Text> */}
        <Switch
          value={toggleSwitch}
          onValueChange={handleToggleSwitch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={toggleSwitch ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  toggleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },

  toggleText: {
    fontSize: 20,
    marginRight: 10,
  },
  responseText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  container: {
    flex: 1,
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
