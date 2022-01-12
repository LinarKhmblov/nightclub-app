import { ITrack } from "./musicReducer";
import { IPerson } from "./personsReducer";
import { ThunkAction } from "redux-thunk";
import songsJSON from '../data/songs.json';
import personsJSON from '../data/persons.json';
import { setPersons, setTracks, TSetPersonsAction, TSetTracksAction } from "./actions";
import { IRootState } from ".";

// simulate async call to the server
export function fetchPersons(): ThunkAction<void, IRootState, unknown, TSetPersonsAction> {
    return function(dispatch){
        Promise.resolve(personsJSON)
        .then((persons: IPerson[]) => {
            dispatch(setPersons(persons))
        })
    }
}

// simulate async call to the server
export function fetchTracks(): ThunkAction<void, IRootState, unknown, TSetTracksAction> {
    return function(dispatch){
        return Promise.resolve(songsJSON)
        .then((tracks: ITrack[]) => {
            dispatch(setTracks(tracks))
        })
    }
}