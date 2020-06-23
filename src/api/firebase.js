import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAMTo7v_eoane-aCQEUEO_xCQJsnrYSb9g",
	authDomain: "bloodbucket-525f0.firebaseapp.com",
	databaseURL: "https://bloodbucket-525f0.firebaseio.com",
	projectId: "bloodbucket-525f0",
	storageBucket: "",
	messagingSenderId: "833746943574",
	appId: "1:833746943574:web:26cb3005b0defa3b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
