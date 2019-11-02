export const GET_IMAGES_REQUEST = 'GET_IMAGES_REQUEST';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE';

const initialState = {
    images: [],
    error: null
};

export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES_REQUEST:
            return {
                images: [],
                error: null
            };
        case GET_IMAGES_SUCCESS:
            return {
                images: action.images,
                error: null
            };
        case GET_IMAGES_FAILURE:
            return {
                images: [],
                error: action.error
            };
        default: return { ...state };
    }
}

export const getImagesRequest = () => ({ type: GET_IMAGES_REQUEST });
export const getImagesSuccess = images => ({ type: GET_IMAGES_SUCCESS, images });
export const getImagesFailure = error => ({ type: GET_IMAGES_FAILURE, error });