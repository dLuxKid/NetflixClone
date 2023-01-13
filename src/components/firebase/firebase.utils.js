import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBjIosGCydO8oewgNs_PLrbVi-d4U92HpU",
  authDomain: "dluxkidtv.firebaseapp.com",
  projectId: "dluxkidtv",
  storageBucket: "dluxkidtv.appspot.com",
  messagingSenderId: "700315397724",
  appId: "1:700315397724:web:8a60dc3953692da08e8099",
  measurementId: "G-9SS5R6MNJD",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
