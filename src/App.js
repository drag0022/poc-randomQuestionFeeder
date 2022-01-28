import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import Questions from "./questions.json";
import cuid from "cuid";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk0thsZVzN8Iu1BDkW8yNsgevQuUzN_w4",
  authDomain: "bellatest01-e1435.firebaseapp.com",
  projectId: "bellatest01-e1435",
  storageBucket: "bellatest01-e1435.appspot.com",
  messagingSenderId: "1018910514131",
  appId: "1:1018910514131:web:5a34f3fc985ee973326d26",
  measurementId: "G-JL4LS5CLS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  useEffect(() => {
    console.log(Questions);
  }, []);
  return (
    <div className="App">
      <form>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
