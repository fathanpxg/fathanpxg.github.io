// Ganti dengan konfigurasi Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyA1bOo_bOFHXTlucScHI-bir114Ubn0yTU",
  authDomain: "namaproject-id.firebaseapp.com",
  projectId: "Pnamaproject-id",
  storageBucket: "namaproject-id.firebasestorage.app",
  messagingSenderId: "784124563275",
  appId: "784124563275:web:c7ce4c726d3c6236e6a2ce"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
