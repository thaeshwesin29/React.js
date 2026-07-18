import { Client, Account, Avatars, Databases } from "react-native-appwrite";

const client = new Client()
  .setProject("6a5998cb000be2261d06")
  .setEndpoint("https://fra.cloud.appwrite.io/v1");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

export default client;