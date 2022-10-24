import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { FirebaseApp } from "firebase/app";
// import { Firestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAqOSxIWs4shc_X0QQpsTSIZnbuAU0ncoc",

  authDomain: "bureau-racks-9c865.firebaseapp.com",

  projectId: "bureau-racks-9c865",

  storageBucket: "bureau-racks-9c865.appspot.com",

  messagingSenderId: "488511466585",

  appId: "1:488511466585:web:9208008771fa8f6eb7d548",

  measurementId: "G-YNKDBPYEGX",
};
// const firestore = initializeApp(config);

// export { firestore };
initializeApp(config);

const db = getFirestore();

const colRef = collection(db, "markers");

getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
});