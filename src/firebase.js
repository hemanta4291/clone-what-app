
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNqx-8Ehgjt6d9gs4nL8oY8SGvbDkJvAg",
    authDomain: "what-app-clone-cc02c.firebaseapp.com",
    projectId: "what-app-clone-cc02c",
    storageBucket: "what-app-clone-cc02c.appspot.com",
    messagingSenderId: "115998485429",
    appId: "1:115998485429:web:6557e160a209d1c441c7fc",
    measurementId: "G-M9EXV8NCG6"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
//   const auth = firebase.auth();


  export { db, auth , storage};