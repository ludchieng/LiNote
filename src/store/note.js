import { doc, setDoc, deleteDoc } from "firebase/firestore";
import shortid from 'shortid';
import db from './dbfirestore'

export const addNote = (createdAt, color, text = '') => {
  const id =`${createdAt}-${shortid.generate()}`;
  setDoc(doc(db, 'notes', id), {color, text});
};

export const setNote = (id, text) => {
  setDoc(doc(db, 'notes', id), {text}, {merge: true});
}

export const removeNote = (id) => {
  deleteDoc(doc(db, "notes", id));
};
