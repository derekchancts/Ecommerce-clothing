import shopActionTypes from './shop-types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'

// export const updateCollections = (collectionsMap) => ({
//   type: shopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap
// })


export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START
})


export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
}) 


export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
        const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
        // updateCollections(collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        // this.setState({ loading: false })
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}