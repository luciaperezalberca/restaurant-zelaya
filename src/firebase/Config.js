import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyACUY6kjmoBj479-PfX6Rvshl4Fh6eeigA",
  authDomain: "restaurant-zelaya.firebaseapp.com",
  projectId: "restaurant-zelaya",
  storageBucket: "restaurant-zelaya.appspot.com",
  messagingSenderId: "927410842599",
  appId: "1:927410842599:web:34d44de1b68adf90606b42"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)