import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCBaKnUrZvm4U8F7T6vGmROE1GnEUdwHQE",
    authDomain: "sruhh-cd1a5.firebaseapp.com",
    databaseURL: "https://sruhh-cd1a5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sruhh-cd1a5",
    storageBucket: "sruhh-cd1a5.appspot.com",
    messagingSenderId: "734365168877",
    appId: "1:734365168877:web:3191541575cde3775c88e4",
    measurementId: "G-KV099E2GKN"
  };


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
