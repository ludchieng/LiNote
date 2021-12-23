import { initializeApp } from "firebase/app";
import { onSnapshot, collection, getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import store from './store';


initializeApp({
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.FIRESTORE_PROJECT_ID,
  storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.FIRESTORE_APP_ID,
});
const db = getFirestore();


export const initFirestore = () => {
  // Enable browser Indexes DB for offline mode
  enableIndexedDbPersistence(db)
    .catch((err) => {
      if (err.code == 'failed-precondition') {
        console.error('Cannot enable Indexed DB data persistence', err)
      } else if (err.code == 'unimplemented') {
        console.error('Browser does not support Indexed DB data persistence', err)
      }
    });
  
  // Real-time firestore listener
  onSnapshot(collection(db, 'notes'), (snapshot) => {
    snapshot.docChanges().forEach(change => {
      const id = change.doc.id;

      if(change.type === 'added'){
        store.update((notes) => ([...notes, {id, ...change.doc.data()}]));
      }

      if(change.type === 'removed'){
        store.update((notes) => notes.filter((n) => n.id !== id));
      }

      if(change.type === 'modified'){
        store.update((notes) => (
          notes.map((n) => n.id !== id ? n : {...n, ...change.doc.data()})
        ));
      }

    });
  });
}


export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/LiNote/sw.js', {scope: '.'})
      .catch(err => console.error('Cannot register service worker', err));
  }
}

export default db;
