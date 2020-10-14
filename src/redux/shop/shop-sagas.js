import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'


import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop-actions'

import shopActionTypes from './shop-types';



export function* fetchCollectionsAsync() {
  // yield console.log('I am fired')
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));

  } catch(error) {
    yield put(fetchCollectionsFailure(error.message));
  }
    // collectionRef.get().then(snapshot => {
    //     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}


// export function* fetchCollectionsStart() {
//   yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
// }

export function* fetchCollectionsStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}