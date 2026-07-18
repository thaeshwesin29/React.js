import { StyleSheet, Text } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"

import { useBooks } from "../../hooks/useBooks"
import { Colors } from "../../constants/Colors"

import ThemedText from "../../components/ThemedText"
import ThemedButton from "../../components/ThemedButton"
import ThemedView from "../../components/ThemedView"
import Spacer from "../../components/Spacer"
import ThemedCard from "../../components/ThemedCard"
import ThemedLoader from "../../components/auth/ThemedLoader"


const BookDetails = () => {
  const [book, setBook] = useState(null)
  const [error, setError] = useState(null)

  const { id } = useLocalSearchParams()
  const { fetchBookById, deleteBook } = useBooks()
  const router = useRouter()

  const handleDelete = async () => {
    try {
      await deleteBook(id)
      router.replace("/(dashboard)/books")
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    async function loadBook() {
      if (!id) return
      try {
        const bookData = await fetchBookById(id)
        setBook(bookData)
      } catch (err) {
        setError(err.message)
      }
    }

    loadBook()
  }, [id])

  if (!book && !error) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }

  if (error) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <Spacer />
        <ThemedText>{error}</ThemedText>
        <Spacer />
        <ThemedButton title="Go Back" onPress={() => router.back()} />
      </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton onPress={handleDelete} style={styles.delete} title="Delete Book" />
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
})