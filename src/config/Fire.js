import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB-WQRUe_l5CVD2WHJV5p3j9KjvNeeK2vE",
    authDomain: "vicode-tutorial-23415.firebaseapp.com",
    projectId: "vicode-tutorial-23415",
    storageBucket: "vicode-tutorial-23415.appspot.com",
    messagingSenderId: "199481978892",
    appId: "1:199481978892:web:6a1749f6b5137b5375fe29",
    measurementId: "G-T4S3TQ29FN"

}

const fire = firebase.initializeApp(config);
export default fire;


