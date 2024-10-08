import {
    FETCH_WORD_COUNT_REQUEST,
    FETCH_WORD_COUNT_SUCCESS,
    FETCH_WORD_COUNT_FAILURE,
    SET_WORD_COUNT_PROPERTY,
    type WordCountActions,
    type WordCountState,
} from '../../actions/wordCount/actions';

export const initialState: WordCountState = {
    pending: false,
    error: null,
    wordCountsInfo: [],
};

export const wordCountReducer = (state = initialState, action: WordCountActions) => {
    switch (action.type) {
        case FETCH_WORD_COUNT_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_WORD_COUNT_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                wordCountsInfo: [action.payload.webPageInfo, ...state.wordCountsInfo],
            };
        case FETCH_WORD_COUNT_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        case SET_WORD_COUNT_PROPERTY: {
            const key = Object.keys(action.payload)[0];
            const value = Object.values(action.payload)[0];
            return {
                ...state,
                [`${key}`]: value,
            };
        }
        default:
            return {
                ...state,
            };
    }
};
