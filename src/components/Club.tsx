import { memo, FC } from "react";
import { ISeparatedPersons } from "../App/App";
import { ITrack } from "../store/musicReducer";
import { ClubPart } from "./ClubPart";

interface IClubProps {
    separatedPersons: ISeparatedPersons;
    currentTrack: ITrack;
} 

export const Club: FC<IClubProps> = memo((props: IClubProps): JSX.Element => {
    const { separatedPersons: { dancingPersons, drinkingPersons}, currentTrack: { genre } } = props; 
    return(
        <div className="club">
            <ClubPart persons={dancingPersons} title='DANCE FLOOR' motion={genre}/>
            <ClubPart persons={drinkingPersons} title='BAR'/>
        </div>
    )
});