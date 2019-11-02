import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import {GET_IMAGES_REQUEST, getImagesFailure, getImagesSuccess} from "../reducer";

const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

function* getImagesSaga() {
    try {
        const { data } = yield call(axios.get, url);

        yield put(getImagesSuccess(data));
    } catch (error) {
        yield put(getImagesFailure(error.message));
    }
}

export default function* watchImages() {
    yield takeEvery(GET_IMAGES_REQUEST, getImagesSaga);
}