import { Client, Account, Avatars} from 'react-native-appwrite';

 export const client = new Client()
    .setProject("698773c30018c5300204")
    .setPlatform(dev.katieparkinson.shelfie);

export const account = new Account(client)
export const avatars = new Avatars(client)