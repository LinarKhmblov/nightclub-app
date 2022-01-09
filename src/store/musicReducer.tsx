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
    currentTrackId: ITrack['id'];
}

const defaultState: IMusicState = {
    tracks: [],
    currentTrackId: 0,
    currentTrack: {
        id: 0,
        title: '',
        duration: 0,
        genre: ''
    }
};

const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
const SET_TRACKS = 'SET_TRACKS';

type TMusicActions = TSetTracksAction | TSetCurrentTrackAction;

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
export type TSetTracksAction = {
    type: 'SET_TRACKS',
    payload: ITrack[]
}
export type TSetCurrentTrackAction = {
    type: 'SET_CURRENT_TRACK',
    payload: ITrack
}

export const setTracks = (payload: ITrack[]): TSetTracksAction => ({type: SET_TRACKS, payload: payload});
export const setCurrentTrackAction = (payload: ITrack): TSetCurrentTrackAction => ({type: SET_CURRENT_TRACK, payload: payload});


