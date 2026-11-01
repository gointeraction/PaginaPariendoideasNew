import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics'

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDlG5sFN7chpiJyf200w5YM0XvRAV8NqYU",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "webperiendoideas.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "webperiendoideas",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "webperiendoideas.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "109062625799",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:109062625799:web:95ee00f31db1e6da6328a2",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-L189E1NDVR",
}

// Initialize Firebase (Singleton pattern for Next.js SSR)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// Firebase Services
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)

// Safe Analytics initialization for browser/client-side only
let analytics: Analytics | null = null
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app)
    }
  })
}

export { analytics }
