import { memo } from "react";
import { ITrack } from "../store/musicReducer";

export const CurrentTrackView = memo(({title, genre}: ITrack) => {
    const genreFormatted = genre.toUpperCase();
    return (
        <div className="current-track">
            <div>Title Track: {title} </div>
            <div>Genre: {genreFormatted} </div>
        </div>
    )
});