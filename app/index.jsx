import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>
       <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>

      <View>
        <Text style={styles.card}>
          Hello, this is a card.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  img: {
    marginVertical: 20,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },

  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    elevation: 3,
  },
});