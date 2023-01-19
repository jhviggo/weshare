import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDbRQwe4cq0zD0u2fCdMg5Hj8tvoPDh3jc",
  authDomain: "viggo-apis.firebaseapp.com",
  projectId: "viggo-apis",
  storageBucket: "viggo-apis.appspot.com",
  messagingSenderId: "166645008669",
  appId: "1:166645008669:web:b3bdd9693778dfec8d39f4",
  measurementId: "G-RCVDDEXVCH"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// USERS
export async function getUsers() {
  const users = collection(db, 'users')
  const usersDocs = (await getDocs(users)).docs.map(doc => doc.data());
  return usersDocs;
}

export async function getUser(uid) {
  const userDoc = doc(db, `/users/${uid}`);
  return (await getDoc(userDoc)).data();
}

// GROUPS
export async function getGroups(uid) {
  return [
    {
      name: 'Cash Monez!'
    },
    {
      name: 'The vault'
    }
  ];
}

// PAYMENTS
export async function getPayments(uid, group) {
  return [
    {
      user: 'viggo',
      amount: 50,
      excludePeople: [],
      currency: 'DKK',
      text: 'shopping',
    },
    {
      user: 'viggo',
      amount: 20,
      excludePeople: [],
      text: 'drinks',
    },
    {
      user: 'sam',
      amount: 10,
      excludePeople: [],
      text: 'beer',
    },
    {
      user: 'sam',
      amount: 30,
      excludePeople: [],
      text: 'car',
    },
    {
      user: 'jannik',
      amount: 20,
      excludePeople: ['sam'],
      text: 'stuff',
    },
    {
      user: 'sam',
      amount: 30,
      excludePeople: ['viggo'],
      text: 'wine',
    },
  ];
}
