import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize
const app = firebase.initializeApp(firebaseConfig);
// Storage
export const storage = firebase.storage();
// Authentication
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();
// DB
export const db = firebase.database();
export const wordssetRef = db.ref("Lists");
export const postsRef = db.ref("Posts");
export const userListsRef = db.ref(auth.currentUser?.uid + "/Lists");
export const userPostsRef = db.ref(auth.currentUser?.uid + "/Posts");
