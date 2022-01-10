import { ITrack, SET_CURRENT_TRACK, SET_TRACKS } from "./musicReducer";
import { IPerson, SET_PERSONS } from "./personsReducer";

export type TSetPersonsAction = {
    type: string,
    payload: IPerson[]
}

export type TSetTracksAction = {
    type: 'SET_TRACKS',
    payload: ITrack[]
}
export type TSetCurrentTrackAction = {
    type: 'SET_CURRENT_TRACK',
    payload: ITrack
}
export type TMusicActions = TSetTracksAction | TSetCurrentTrackAction;
export const setTracks = (payload: ITrack[]): TSetTracksAction => ({type: SET_TRACKS, payload: payload});
export const setCurrentTrackAction = (payload: ITrack): TSetCurrentTrackAction => ({type: SET_CURRENT_TRACK, payload: payload});
export const setPersons = (payload: IPerson[]) => ({type: SET_PERSONS, payload: payload});