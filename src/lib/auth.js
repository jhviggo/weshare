import { app } from './repository';
import { userStore } from '../store';
import { getUser } from './repository';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

export async function login(email, password) {
  const user = (await signInWithEmailAndPassword(auth, email, password)).user;
  const userDoc = await getUser(user.uid);

  userStore.set({
    accessToken: user.accessToken,
    email: user.email,
    uid: user.uid,
    name: userDoc?.name,
    phone: userDoc?.phone,
    currency: userDoc?.currency,
    groups: userDoc?.groups,
  });

  console.log({
    accessToken: user.accessToken,
    email: user.email,
    uid: user.uid,
    name: userDoc?.name,
    phone: userDoc?.phone,
    currency: userDoc?.currency,
    groups: userDoc?.groups,
  });
  return user;
}

export async function logout() {
  await auth.signOut();
}

export function isLoggedIn() {
  return auth.currentUser !== undefined;
}