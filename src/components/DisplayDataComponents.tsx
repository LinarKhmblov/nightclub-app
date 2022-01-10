import { memo } from "react";
import { ISeparatedPersons } from "../App/App";
import { ITrack } from "../store/musicReducer";
import { IPerson } from "../store/personsReducer";


export const DisplayDataCurrentTrack = memo((currentTrack: ITrack) => (
    <div className="display-data_current-track">
      <div>Title Track: {currentTrack.title} </div>
      <div>Genre: {String(currentTrack.genre).toUpperCase()}  </div>
    </div>
));

export const DisplayDataSeparatedPersons = memo((separatedPersons: ISeparatedPersons) => (
  <div className="display-data_separated-persons">
    {Object.entries(separatedPersons).map((entrie) => (
      <ul key={entrie[0]}>
          <h3>
            {String(entrie[0]).toUpperCase().replace('PERSONS', ' PERSONS')}
          </h3>
          {entrie[1].map((person: IPerson) => (
              <li key={person.id}>
                <span>
                  {person.name}
                </span>
                <div>
                  skills: {person.skills.join(',')}
                </div>
              </li>
          ))}
      </ul>
    ))}
  </div>
));