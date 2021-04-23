import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyANIkN-DdgZqCLmDTSe0UY71mZIdAOyNnw',
  authDomain: 'linkedin-clone-2640d.firebaseapp.com',
  projectId: 'linkedin-clone-2640d',
  storageBucket: 'linkedin-clone-2640d.appspot.com',
  messagingSenderId: '102532709117',
  appId: '1:102532709117:web:64bb56feba6191d8c8dc94',
  measurementId: 'G-8DKEZ8FJH2',
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
