/*eslint-disable*/
import { db } from '../../../firebase';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import {
  exercisesConst,
  deleteCollection,
  insertCollection,
  updateCollection,
  viewCollection,
} from '../constant/exerciseInnerConst';
import { Toast, ToastBody } from 'reactstrap';

export const getResetValue = (data) => (dispatch) => {
  dispatch({ type: exercisesConst.RESET_DAY, payload: data });
};
export const ViewCollection = (collectionName) => async (dispatch) => {
  const globalCollection = collection(db, collectionName);
  const response = await getDocs(globalCollection);
  console.log(response,"TestingResponse")
  if (response) {
    dispatch({
      type: viewCollection.VIEW_COLLECTION,
      payload: response?.docs?.map((doc) => ({ ...doc.data(), id: doc.id })),
    });
  }
};
export const InserCollection = (collectionName, data) => async (dispatch) => {
  const usersCollectionRef = collection(db, collectionName);
  const response = await addDoc(usersCollectionRef, data);
  if (response) {
    dispatch(ViewCollection());
    <Toast>
      <ToastBody>Added</ToastBody>
    </Toast>;
  } else {
    <Toast>
      <ToastBody>Not add</ToastBody>
    </Toast>;
  }
};
