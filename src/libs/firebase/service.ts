import { getFirestore, getDocs, getDoc, doc, collection, where, query } from 'firebase/firestore';
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

export async function getFilteredDataByNameIncludes(collectionName: string, substring: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const filteredData = data.filter((doc: any) => doc.nameBusines && doc.nameBusines.includes(substring));

  return filteredData;
}

export async function getDataByFields(collectionName: string, field: string, value: string) {
  const q = query(collection(firestore, collectionName), where(field, '==', value));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function getDataByTwoFields(
  collectionName: string,
  fieldOne: string,
  valueOne: string,
  fieldTwo: string,
  valueTwo: string
) {
  const q = query(
    collection(firestore, collectionName),
    where(fieldOne, '==', valueOne),
    where(fieldTwo, '==', valueTwo)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
