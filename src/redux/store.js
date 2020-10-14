import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
// import { fetchCollectionsStart } from './shop/shop-sagas'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'


const sagaMiddleware = createSagaMiddleware();


// const middlewares = [logger];
// const middlewares = [thunk];
const middlewares = [sagaMiddleware];


if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : compose (applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


/*
export const store = createStore(
  rootReducer, 
  compose (applyMiddleware(...middlewares),
                             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
  // compose (applyMiddleware(...middlewares),
  //                            )
  )
*/


export const store = createStore(rootReducer, devTools);


// sagaMiddleware.run(fetchCollectionsStart);
sagaMiddleware.run(rootSaga);



export const persistor = persistStore(store);  

export default { store, persistor };


