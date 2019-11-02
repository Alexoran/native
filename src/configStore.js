import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga/imagesSaga';

const sagaMiddleware = createSagaMiddleware();

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
