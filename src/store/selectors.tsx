import { IRootState } from ".";
import { ITrack } from "./musicReducer";

export const persons = (state: IRootState) => state.persons.persons;
export const tracks = (state: IRootState) => state.music.tracks;
export const currentTrack = (state: IRootState) => state.music.currentTrack;
// equality function for useselector, to prevent needless render
export const isEqualTrack = (prevTrack: ITrack, nextTrack: ITrack): boolean => prevTrack.id === nextTrack.id;
