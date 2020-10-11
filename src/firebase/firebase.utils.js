import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1sJDcULtCF8tYafxUswXMGYjgv_1c4g8",
    authDomain: "crwn-react-db-2755e.firebaseapp.com",
    databaseURL: "https://crwn-react-db-2755e.firebaseio.com",
    projectId: "crwn-react-db-2755e",
    storageBucket: "crwn-react-db-2755e.appspot.com",
    messagingSenderId: "1076147401488",
    appId: "1:1076147401488:web:6a815a5699ecfee10e2b95"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;