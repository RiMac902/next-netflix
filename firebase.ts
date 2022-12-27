import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCNKxA78vDo5xWoC6W9bH4fVF2kzLnzF6g",
    authDomain: "next-netflix-5f6c0.firebaseapp.com",
    projectId: "next-netflix-5f6c0",
    storageBucket: "next-netflix-5f6c0.appspot.com",
    messagingSenderId: "55344469757",
    appId: "1:55344469757:web:3461794fcf060585d15094"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }