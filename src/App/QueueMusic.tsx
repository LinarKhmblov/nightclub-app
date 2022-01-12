import { store } from '../store';
import { setCurrentTrackAction } from '../store/actions';
import { ITrack } from '../store/musicReducer';

class QueueMusic {
  private _queue: ITrack[];
  private _indexCurrentTrack: number;

  constructor() {
    this._queue = [];
    this._indexCurrentTrack = 0;
  }

  init(tracks: ITrack[]) {
    if (tracks.length === 0) {
      return;
    }
    this._indexCurrentTrack = 0;
    this._queue = tracks;
    this._play();
  }

  private _play(): void {
    const currentTrack = this._queue[this._indexCurrentTrack];
    store.dispatch(setCurrentTrackAction(currentTrack));
    setTimeout(() => {
      this._next();
    }, currentTrack.duration);
  }

  private _next(): void {
    this._indexCurrentTrack++;
    if(this._indexCurrentTrack > this._queue.length - 1){
      this._indexCurrentTrack = 0;
    }
    this._play();
  }
}

export const queue = new QueueMusic();