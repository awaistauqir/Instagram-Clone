import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAaY56soBILKsbRn6TnqmIesdMsRw6Nn8Y',
	authDomain: 'instagram-clone-27bd9.firebaseapp.com',
	projectId: 'instagram-clone-27bd9',
	storageBucket: 'instagram-clone-27bd9.appspot.com',
	messagingSenderId: '492779639690',
	appId: '1:492779639690:web:c35ce039fa171768c5ee73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);
export { db, storage };
