import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  CounterStore,
  decrementCounterAction,
  incrementCounterAction,
  resetCounterAction,
  selectCount,
} from 'stores';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter-page.template.html',
  styleUrls: ['./counter-page.style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public count$: Observable<number>;

  constructor(private store: Store<CounterStore>) {
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
