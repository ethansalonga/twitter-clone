import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBRzkv4ZQQ1_YUOes4RhkkPHj18lfjRq38",
  authDomain: "twitter-clone-38762.firebaseapp.com",
  projectId: "twitter-clone-38762",
  storageBucket: "twitter-clone-38762.appspot.com",
  messagingSenderId: "670619060565",
  appId: "1:670619060565:web:a58ddece97138975d107dc",
  measurementId: "G-7RLWZS1058"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db