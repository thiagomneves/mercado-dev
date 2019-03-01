const config = {
  apiKey: "AIzaSyAJJorkBIWYvWZdGV1bwyEPPYZXEgiGZ7s",
  authDomain: "mercadodev-e752f.firebaseapp.com",
  databaseURL: "https://mercadodev-e752f.firebaseio.com",
  projectId: "mercadodev-e752f",
  storageBucket: "gs://mercadodev-e752f.appspot.com/",
  messagingSenderId: "197661600813"
};

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base