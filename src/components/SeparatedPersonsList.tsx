import { FC } from "react";
import { IPerson } from "../store/personsReducer";

interface ISeparatedPersonsViewProps {
    persons: IPerson[];
    title: string;
}

export const SeparatedPersonsList: FC<ISeparatedPersonsViewProps> = ({persons, title}: ISeparatedPersonsViewProps) => {
    const skillsFormatted = (skills: string[]) => skills.join(',');
    return (
      <ul>
        <h3>
          {title}
        </h3>
        {persons.map(({id, name, skills}: IPerson) => (
          <li key={id}>
            <span>
              {name}
            </span>
            <div>
              skills: {skillsFormatted(skills)}
            </div>
          </li>
        ))}
      </ul>
    )
}