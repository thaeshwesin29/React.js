import { StyleSheet, FlatList, Pressable, Alert } from 'react-native'
import { useBooks } from '../../hooks/useBooks'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedCard from "../../components/ThemedCard"

const Books = () => {
  const { books, deleteBook } = useBooks()
  const router = useRouter()

  const handleDelete = (item) => {
    Alert.alert(
      "Delete Book",
      `Are you sure you want to delete "${item.title}"?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteBook(item.$id) },
      ]
    )
  }

  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>

      <Spacer />
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/(dashboard)/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText>Written by {item.author}</ThemedText>
              <Pressable onPress={() => handleDelete(item)} style={styles.deleteBtn}>
                <ThemedText style={{ color: Colors.warning }}>Delete</ThemedText>
              </Pressable>
            </ThemedCard>
          </Pressable>
        )}
      />

    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    marginTop: 40
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  deleteBtn: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
})