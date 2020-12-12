import firebase from 'firebase';
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyDkf5RqeV1HmSCRFpeNkxTK-8Cbcz0e0DE",
  authDomain: "hackoff-321b9.firebaseapp.com",
  projectId: "hackoff-321b9",
  storageBucket: "hackoff-321b9.appspot.com",
  messagingSenderId: "856828914077",
  appId: "1:856828914077:web:411fa53e9e543369bfa774"
};

firebase.initializeApp(config);

const auth = firebase.auth()
const db = firebase.firestore()
export default auth;
export {db}