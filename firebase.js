import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDosh4NH3kl1Gz6Hy3IWSnHvK6oTEe5Wyo',
  authDomain: 'moment-dating-love.firebaseapp.com',
  databaseURL: 'https://moment-dating-love.firebaseio.com',
  projectId: 'moment-dating-love',
  storageBucket: 'moment-dating-love.appspot.com',
  messagingSenderId: '421951436102',
  appId: '1:421951436102:web:e2e1cecd8f36c34d',
};
export const googleConfig = {
  iosClientId: '421951436102-n61pbm586cr6ki9li6q6n2cnrqjprdil.apps.googleusercontent.com',
  // androidClientId: `<YOUR_ANDROID_CLIENT_ID_FOR_EXPO>`,
  iosStandaloneAppClientId: '421951436102-n61pbm586cr6ki9li6q6n2cnrqjprdil.apps.googleusercontent.com',
  // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
  scopes: ['profile', 'email'],
  behavior: 'web',
};

firebase.initializeApp(firebaseConfig);
// const settings = {
//   timestampsInSnapshots: true,
// };
export const firestore = firebase.firestore();
export const storage = firebase.storage();
// firestore.settings(settings);
export default firebase;
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const createUserProfileDocument = async (user, additonalData) => {
  // Workw onthis when  Login is  working
  return null;

  if (!user) return;
  //Get the ref from the ID
  const userRef = firestore.doc(`users/${user.uid}`);
  console.log('here2 ');
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    console.log('here??? ');
    //Create User
    const createAt = new Date();
    const { displayName, email, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createAt,
        ...additonalData,
      });
    } catch (error) {
      console.log('createUserProfileDocument', error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection('users')
      .doc(uid)
      .get();
    return { uid, ...userDocument.data() };
  } catch (error) {
    console.log('getUserDocument Error ', error);
  }
};
export const setUserDocument = async user => {
  const userRef = firestore.doc(`users/${user.uid}`);
  try {
    let props = {
      ...user,
      updatedAt: new Date(),
    };
    delete props['uid'];
    await userRef.update(props);
  } catch (error) {
    console.log('setUserDocument', error);
  }
};
