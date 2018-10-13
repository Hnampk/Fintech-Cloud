import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class TabStore {
  private _index: BehaviorSubject<number> = new BehaviorSubject(0);

  public readonly index: Observable<number> = this._index.asObservable();

  update(newIndex: number): any {
    this._index.next(newIndex);
  }
}
