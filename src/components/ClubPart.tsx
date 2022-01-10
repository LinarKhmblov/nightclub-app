import { FC } from "react";
import { IPerson } from "../store/personsReducer";
import { Person } from "./Person";

interface IClubPartProps {
    persons: IPerson[];
    motion?: string;
    title: string;
}

export const ClubPart: FC<IClubPartProps> = ({persons, motion, title}: IClubPartProps): JSX.Element => {
    return (
        <div className="club_part">
            <div className="club_part__title">
                {title}
            </div>
            <div className="club_part__place">
                {persons.map((person: IPerson) => (
                    <Person key={person.id} name={person.name} sex={person.sex} motion={motion}/>
                ))}
            </div>
        </div>
    )
};