import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC1vDOVEjVkNC8RFH4Hhuj6yHUoqwWRAhg",
    authDomain: "mymapexample-1549434729068.firebaseapp.com",
    databaseURL: "https://mymapexample-1549434729068.firebaseio.com",
    projectId: "mymapexample-1549434729068",
    storageBucket: 'mymapexample-1549434729068.appspot.com',
    messagingSenderId: 672358720653,
    appId: "1:672358720653:web:88b27c8768c95db4e06ec4"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
    
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;