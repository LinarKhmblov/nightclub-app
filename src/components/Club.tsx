import { memo, FC } from "react";
import { useSelector } from "react-redux";
import { ISeparatedPersons } from "../App"
import { ITrack } from "../store/musicReducer";
import { IRootState } from "../store/store";
import { ClubPart } from "./ClubPart";
export const Club: FC<ISeparatedPersons> = memo(({dancingPersons, drinkingPersons}): JSX.Element => {
    const currentTrack = useSelector<IRootState, ITrack>(state => state.music.currentTrack);
    return(
        <div className="club">
            <ClubPart persons={dancingPersons} title='DANCEFLOOR' motion={currentTrack.genre}/>
            <ClubPart persons={drinkingPersons} title='BAR'/>
        </div>
    )
});