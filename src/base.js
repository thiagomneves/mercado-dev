const config = {
  apiKey: "AIzaSyAJJorkBIWYvWZdGV1bwyEPPYZXEgiGZ7s",
  authDomain: "mercadodev-e752f.firebaseapp.com",
  databaseURL: "https://mercadodev-e752f.firebaseio.com",
  projectId: "mercadodev-e752f",
  storageBucket: "mercadodev-e752f.appspot.com",
  messagingSenderId: "197661600813"
};

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base