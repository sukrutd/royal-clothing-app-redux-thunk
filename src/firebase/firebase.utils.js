import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAmrhwQzF2DZxrteV71HcO8Cur8xcf2NcI',
	authDomain: 'royal-clothing-db.firebaseapp.com',
	projectId: 'royal-clothing-db',
	storageBucket: 'royal-clothing-db.appspot.com',
	messagingSenderId: '42538911801',
	appId: '1:42538911801:web:d74b818adff0dba5b025e8',
	measurementId: 'G-X6JZ2BHJ47'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log('Error occurred while creating a user: ', error.message);
		}
	}

	return userRef;
};

export default firebase;
