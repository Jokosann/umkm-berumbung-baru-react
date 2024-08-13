import { getFirestore, getDocs, getDoc, doc, collection } from 'firebase/firestore';
import { app } from './init';

const firestore = getFirestore(app);

export async function getData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function getDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();

  return data;
}

// getDataById('business', 'lngWf1E64Bc1Gj9X1ArB');
