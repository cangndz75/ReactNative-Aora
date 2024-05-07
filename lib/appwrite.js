import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "66353a8d0039d60fe0b5",
  databaseId: "66353bdf0016d193975a",
  userCollectionId: "66353bfd000958afa20a",
  videoCollectionId: "66353c1b00214795ff0e",
  storageId: "66353d760033ce20212e",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    )
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async(email, password) =>  {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// export const getCurrentUsers = async () => {
//   try {
//     const currentAccount = await account.get();
//     if(!currentAccount) throw Error;
//     const currentUser = await databases.listDocuments(
//       config.databaseId,
//       config.userCollectionId,
//       [Query.equal('accountId',currentAccount.$id)]
//     )
//     if(!currentUser) throw Error;

//     return currentUser.documents[0];
//   } catch (error) {
    
//   }
// }