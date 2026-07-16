import { StyleSheet,Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

// themed components
import ThemeView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Register = () => {

  const handleRegister = () => {
    console.log("Register pressed")
  }

  return (
    <ThemeView style={styles.container}>
      
      <Spacer />

      <ThemedText title style={styles.title}>
        Register For an Account
      </ThemedText>

      <ThemedButton
        title="Register"
        onPress={handleRegister}
      />

      <Spacer height={100} />

      <Link href="/login">
        <ThemedText style={{ textAlign: 'center' }}>
          Login instead
        </ThemedText>
      </Link>

    </ThemeView>
  )
}

export default Register

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