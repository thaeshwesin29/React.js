import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
    
  return (
    // Fixed: Combined styles inside an array []
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      {/* Fixed: Applied dynamic color to the text */}
      <Text style={[styles.title, { color: theme.title }]}>About Page</Text>

      {/* Fixed: Applied dynamic color to the link */}
      <Link href="/" style={[styles.link, { color: theme.primary, borderBottomColor: theme.primary }]}>
        Back Home
      </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
})