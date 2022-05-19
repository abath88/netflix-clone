import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBP7bpMGU0pzLXV0iV92ZYMsowQ2yqFs8Y",
    authDomain: "netflix-clone-5d5a3.firebaseapp.com",
    projectId: "netflix-clone-5d5a3",
    storageBucket: "netflix-clone-5d5a3.appspot.com",
    messagingSenderId: "543843943680",
    appId: "1:543843943680:web:e644d8f8bd893d8246dfe5"
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const auth = getAuth(app);

export { db, auth }