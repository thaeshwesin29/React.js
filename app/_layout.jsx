import { StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

      <View style={{ flex: 1, backgroundColor: theme.background }}>
        <Tabs
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.navBackground,
            },
            headerTintColor: theme.title,
          }}
        >
          <Tabs.Screen 
            name="index" 
            options={{ title: "Home" }} 
          />

          <Tabs.Screen 
            name="(auth)" 
            options={{ headerShown: false }} 
          />

          <Tabs.Screen 
            name="(dashboard)" 
            options={{ headerShown: false }} 
          />

        </Tabs>
      </View>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
