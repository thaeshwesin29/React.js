import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "6a59aa920038f6f0b536";
const COLLECTION_ID = "books";

export const BooksContext = createContext();


export function BooksProvider({ children }) {

  const [books, setBooks] = useState([]);
  const { user } = useUser();


  async function fetchBooks() {

    if (!user) return;

    try {

      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal("userId", user.$id)
        ]
      );

      setBooks(response.documents);

    } catch (error) {
      console.error("Fetch books error:", error.message);
    }
  }



  async function fetchBookById(id) {

    try {

      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );

      return response;

    } catch (error) {

      console.log("Fetch book error:", error.message);
      throw error;

    }
  }



  async function createBook(data) {

    try {

      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          ...data,
          userId: user.$id
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );

      await fetchBooks();


    } catch (error) {

      console.log("Create book error:", error.message);
      throw error;

    }
  }



  async function deleteBook(id) {

    try {

      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );

      await fetchBooks();

    } catch (error) {

      console.log("Delete book error:", error.message);
      throw error;

    }
  }



  useEffect(() => {
    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user]);



  return (

    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBook
      }}
    >

      {children}

    </BooksContext.Provider>

  );
}