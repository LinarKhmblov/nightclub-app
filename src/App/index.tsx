import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import '../components/ComponentsStyles.scss';
import { IPerson } from '../store/personsReducer';
import { ITrack } from '../store/musicReducer';
import { queue } from './QueueMusic';
import { Club } from '../components/Club';
import { fetchPersons, fetchTracks } from '../store/middleware';
import * as selectors from '../store/selectors';
import { CurrentTrackView } from '../components/CurrentTrackView';
import { SeparatedPersonsView } from '../components/SeparatedPersonsView';
import { IRootState } from '../store';

export interface ISeparatedPersons {
  drinkingPersons: IPerson[];
  dancingPersons: IPerson[];
}

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const persons = useSelector<IRootState, IPerson[]>(selectors.persons);
  const tracks = useSelector<IRootState, ITrack[]>(selectors.tracks);
  const currentTrack = useSelector<IRootState, ITrack>(selectors.currentTrack, selectors.isEqualTrack);
  const [separatedPersons, setSeparatedPersons] = useState<{drinkingPersons: IPerson[], dancingPersons: IPerson[]}>({ drinkingPersons: [], dancingPersons: [] });

  useEffect(() => {
    // init data
    dispatch(fetchTracks());
    dispatch(fetchPersons());
  }, [dispatch]);

  useEffect(() => {
    // run tracks
    queue.init(tracks);
  }, [tracks]);

  useEffect(() => {
    // if track or persons changed -> divide persons
    setSeparatedPersons(
      persons.reduce((separatedPersons: ISeparatedPersons, person) => {
        person.skills.includes(currentTrack.genre) ? separatedPersons.dancingPersons.push(person) : separatedPersons.drinkingPersons.push(person);
        return separatedPersons;
      }, { dancingPersons: [], drinkingPersons: []}),
    );
  }, [currentTrack, persons]);
  
  return (
    <div className="App">
      <CurrentTrackView {...currentTrack}/>
      <Club separatedPersons={separatedPersons} currentTrack={currentTrack} />
      <SeparatedPersonsView {...separatedPersons}/>
    </div>
  );
}
