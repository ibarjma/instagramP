import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// input the seed file
// call the seed only once!

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBJWBwgPsz0YTt7Zp1Jv7CM7mA4vNwZqm8',
  authDomain: 'instagram-65d2a.firebaseapp.com',
  projectId: 'instagram-65d2a',
  storageBucket: 'instagram-65d2a.appspot.com',
  messagingSenderId: '737626807658',
  appId: '1:737626807658:web:706baa5c56267e973bd913',
  measurementId: 'G-0ZS5Z6DCX3'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
