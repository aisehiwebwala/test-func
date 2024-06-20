const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore/lite");
require("dotenv").config();

const firebaseConfig = JSON.parse(process.env.fconfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const data_base = getFirestore(app);
module.exports = data_base;
