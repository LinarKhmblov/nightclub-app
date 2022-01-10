export interface IPerson {
    id: number,
    name: string,
    sex: string,
    skills: string[]
}

export interface IPersonState {
    persons: IPerson[]
}

const defaultState: IPersonState = {
    persons: []
};

export const SET_PERSONS = 'SET_PERSONS';

export const personsReducer = (state = defaultState, action: { type: string; payload: IPerson[]; }) => {
    switch(action.type) {
        case SET_PERSONS: 
            return {persons: [...action.payload]};
        default: 
            return state;
    }
};

