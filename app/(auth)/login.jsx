import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

import ThemeView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {

  const handleSubmit = () => {
    console.log('register form submitted')
  }

  return (
    <ThemeView style={styles.container}>
      
      <Spacer />

      <ThemedText title style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedButton
        title="Login"
        onPress={handleSubmit}
      />

      <Spacer height={100} />

      <Link href="/register">
        <ThemedText style={{ textAlign: 'center' }}>
          Register instead
        </ThemedText>
      </Link>

    </ThemeView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 30
  },
})