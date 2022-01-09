import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersons, fetchTracks, IRootState } from './store/store';
import { ITrack } from './store/musicReducer';
import { IPerson } from './store/personsReducer';
import { Club } from './components/Club';
import { DisplayDataCurrentTrack, DisplayDataSeparatedPersons } from './components/DisplayDataComponents';
import { queue } from './QueueMusic';
import './App.scss';
import './components/ComponentsStyles.scss';

export interface ISeparatedPersons {
  drinkingPersons: IPerson[];
  dancingPersons: IPerson[];
}

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const persons = useSelector<IRootState, IPerson[]>((state) => state.persons.persons);
  const currentTrack = useSelector<IRootState, ITrack>((state) => state.music.currentTrack);
  const tracks = useSelector<IRootState, ITrack[]>(state => state.music.tracks);
  const [separatedPersons, setSeparatedPersons] = useState<{drinkingPersons: IPerson[], dancingPersons: IPerson[]}>({ drinkingPersons: [], dancingPersons: [] });

  useEffect(() => {
    // init data
    dispatch(fetchTracks());
    dispatch(fetchPersons());
    //FIXME: wrong empty deps
  }, []);

  useEffect(() => {
    // run queue of tracks
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
      <DisplayDataCurrentTrack {...currentTrack}/>
      <Club {...separatedPersons} />
      <DisplayDataSeparatedPersons {...separatedPersons}/>
    </div>
  );
}
