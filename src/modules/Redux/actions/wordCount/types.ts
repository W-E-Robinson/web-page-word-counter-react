import { TableRowObjShape } from '../../../../molecules/Table/types';
import {
    FETCH_WORD_COUNT_REQUEST,
    FETCH_WORD_COUNT_SUCCESS,
    FETCH_WORD_COUNT_FAILURE,
    SET_WORD_COUNT_PROPERTY,
} from './actionTypes';

export interface Word extends TableRowObjShape { // NOTE: eh?
    word: string;
    count: number;
}

export interface WebPageInfo { // NOTE: where should all the typings in redux live? also d.ts?
    url: string;
    wordCount: number;
    wordsList: Word[];
}

export interface WordCountState {
    pending: boolean;
    error: undefined | string | null;
    wordCountsInfo: WebPageInfo[];
}

export interface FetchWordCountRequestPayload {
    searchedUrls: string[];
    webPageUrl: string;
}

export interface FetchWordCountSuccessPayload {
    webPageInfo: WebPageInfo;
}

export interface FetchWordCountFailurePayload {
    error: string | null;
}

export type FetchWordCountRequest = {
    type: typeof FETCH_WORD_COUNT_REQUEST;
    payload: FetchWordCountRequestPayload,
};

export type FetchWordCountSuccess = {
    type: typeof FETCH_WORD_COUNT_SUCCESS;
    payload: FetchWordCountSuccessPayload;
};

export type FetchWordCountFailure = {
    type: typeof FETCH_WORD_COUNT_FAILURE;
    payload: FetchWordCountFailurePayload;
};

export interface SetWordCountPropertyPayload {
    [key: string]: null | string | number | undefined;
}

export type SetWordCountProperty = {
    type: typeof SET_WORD_COUNT_PROPERTY;
    payload: SetWordCountPropertyPayload;
};

export type WordCountActions =
    | FetchWordCountRequest
    | FetchWordCountSuccess
    | FetchWordCountFailure
    | SetWordCountProperty;
