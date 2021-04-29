import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyBH0Z6F6m736EPpIL6zKedOtW4E9R3iH4s",
//   authDomain: "linkedin-clone-try.firebaseapp.com",
//   projectId: "linkedin-clone-try",
//   storageBucket: "linkedin-clone-try.appspot.com",
//   messagingSenderId: "696780809300",
//   appId: "1:696780809300:web:393e43e13c7271c555b9c1",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}