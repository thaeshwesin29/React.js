import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    // Wrapped everything inside a Fragment (<> ... </>) so React can render both elements
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      
      <View style={{ flex: 1, backgroundColor: theme.background }}> 
        <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title, 
        }} />
        <Text style={{ color: theme.text }}>Footer</Text>
      </View>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})