import { initializeApp } from '../firebase/app';
import { getMessaging } from "../firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB5ydyjo9O9blpgSdRynO1ljSYcVi0vYgs",
  authDomain: "noti-test-by-wy.firebaseapp.com",
  projectId: "noti-test-by-wy",
  storageBucket: "noti-test-by-wy.firebasestorage.app",
  messagingSenderId: "96202926342",
  appId: "1:96202926342:web:abcc4cdebc53a2cc5e9687",
  measurementId: "G-BR6YE7E9ZG"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
// const analytics = getAnalytics(app);