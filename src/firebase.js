import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Добавили базу данных

const firebaseConfig = {
  apiKey: "AIzaSyClWEdtizB54rTTw_gWnMC0uCPSkgjlEaw",
  authDomain: "school-site-d2eb4.firebaseapp.com",
  projectId: "school-site-d2eb4",
  storageBucket: "school-site-d2eb4.firebasestorage.app",
  messagingSenderId: "810079580713",
  appId: "1:810079580713:web:2118a98bab56e3d4ff2238",
  measurementId: "G-B97KHDGK31",
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);

// Экспортируем базу данных, чтобы NewsPage.jsx мог её видеть
export const db = getFirestore(app);
