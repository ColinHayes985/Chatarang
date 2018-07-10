import firebase from 'firebase/app'

const config = {
    apiKey: "Your API Key",
    authDomain: "Your Auth Domain",
    databaseURL: "Your Database URL",
    projectId: "Your Project ID",
    storageBucket: "Your Storage  Bucket",
    messagingSenderId: "Your Sender ID"
};
const app = firebase.initializeApp(config);
