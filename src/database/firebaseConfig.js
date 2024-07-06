// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHRDhPB_Mbh88S_1e1O4CyeTgVnvdK0pk",
  authDomain: "burgerpepsi-expo.firebaseapp.com",
  projectId: "burgerpepsi-expo",
  storageBucket: "burgerpepsi-expo.appspot.com",
  messagingSenderId: "693115963681",
  appId: "1:693115963681:web:2063a31b35709050d59660",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreConfig = getFirestore(app);
const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const storage = getStorage(app);
export { firestoreConfig, auth, storage };
