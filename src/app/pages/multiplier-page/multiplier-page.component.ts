import { ChangeDetectionStrategy, Component, computed, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CounterStore,
  decrementCounterAction,
  GeneralStore,
  incrementCounterAction,
  resetCounterAction,
  selectCount,
  selectMultiplier,
  setMultiplierAction,
} from 'stores';

@Component({
  selector: 'app-multiplier',
  imports: [],
  templateUrl: './multiplier-page.template.html',
  styleUrls: ['./multiplier-page.style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiplierComponent {
  public count: Signal<number>;
  public multiplier: Signal<number | null | undefined>;

  public multipliedCount: Signal<number>;

  private multiplierValue = 1;

  constructor(private store: Store<CounterStore & GeneralStore>) {
    this.count = this.store.selectSignal(selectCount);
    this.multiplier = this.store.selectSignal(selectMultiplier);
    this.multipliedCount = computed(() => this.count() * (this.multiplier() ?? 1));
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

  public incrementMultiplier() {
    this.multiplierValue++;
    this.store.dispatch(setMultiplierAction({ value: this.multiplierValue }));
  }

  public decrementMultiplier() {
    this.multiplierValue--;
    this.store.dispatch(setMultiplierAction({ value: this.multiplierValue }));
  }

  public resetMultiplier() {
    this.multiplierValue = 1;
    this.store.dispatch(setMultiplierAction({ value: this.multiplierValue }));
  }
}
