import { IMusicState, ITrack, musicReducer, setTracks, TSetTracksAction } from "./musicReducer";
import { IPerson, IPersonState, personsReducer, setPersons, TSetPersonsAction } from "./personsReducer";
import thunk, { ThunkAction } from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import songsJSON from '../data/songs.json';
import personsJSON from '../data/persons.json';

export interface IRootState {
    music: IMusicState,
    persons: IPersonState,
} 

const rootReducer = combineReducers({
    music: musicReducer,
    persons: personsReducer,
});

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

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
