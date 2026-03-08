import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrementCounterAction,
  incrementCounterAction,
  resetCounterAction,
  selectCount,
} from 'stores';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  public count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  public increment() {
    this.store.dispatch(incrementCounterAction());
  }

  public decrement() {
    this.store.dispatch(decrementCounterAction());
  }

  public reset() {
    this.store.dispatch(resetCounterAction());
  }
}
