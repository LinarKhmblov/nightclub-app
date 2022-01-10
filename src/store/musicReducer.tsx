import { TMusicActions } from "./actions";

export interface ITrack {
    id: number,
    artist?: string,
    title: string,
    duration: number,
    genre: string;
}

export interface IMusicState {
    tracks: ITrack[];
    currentTrack: ITrack;
}

const defaultState: IMusicState = {
    tracks: [],
    currentTrack: {
        id: 0,
        title: '',
        duration: 0,
        genre: ''
    }
};

export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const SET_TRACKS = 'SET_TRACKS';

export const musicReducer = (state = defaultState, action: TMusicActions): IMusicState => {
    switch(action.type) {
        case SET_CURRENT_TRACK:
            return {...state, currentTrack: action.payload};
        case SET_TRACKS:
            return {...state, tracks: [...action.payload]};
        default:
            return state;
    }
}