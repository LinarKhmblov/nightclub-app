import { IMusicState,  musicReducer } from "./musicReducer";
import { IPersonState, personsReducer } from "./personsReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

export interface IRootState {
    music: IMusicState,
    persons: IPersonState,
} 

const rootReducer = combineReducers({
    music: musicReducer,
    persons: personsReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
