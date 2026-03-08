import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { clickButton, getDebugElement, getText } from 'testing';
import {
  CounterStore,
  decrementCounterAction,
  incrementCounterAction,
  resetCounterAction,
  selectCount,
} from 'stores';

import { CounterPageComponent } from './counter-page.component';

describe('CounterPageComponent', () => {
  let component: CounterPageComponent;
  let fixture: ComponentFixture<CounterPageComponent>;
  let mockStore: MockStore<CounterStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPageComponent],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);

    mockStore.overrideSelector(selectCount, 0);
    mockStore.refreshState();
    vi.spyOn(mockStore, 'dispatch');

    fixture = TestBed.createComponent(CounterPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the section title', () => {
    expect(getText(fixture, '.section-title')).toBe('Counter');
  });

  it('should display the initial count as 0', () => {
    expect(getText(fixture, '.count-value')).toContain('0');
  });

  it('should display the updated count when selector value changes', () => {
    mockStore.overrideSelector(selectCount, 42);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(getText(fixture, '.count-value')).toContain('42');
  });

  it('should dispatch incrementCounterAction when Increment button is clicked', () => {
    clickButton(fixture, '.increment-button');
    fixture.detectChanges();

    expect(mockStore.dispatch).toHaveBeenCalledWith(incrementCounterAction());
  });

  it('should dispatch decrementCounterAction when Decrement button is clicked', () => {
    clickButton(fixture, '.decrement-button');
    fixture.detectChanges();

    expect(mockStore.dispatch).toHaveBeenCalledWith(decrementCounterAction());
  });

  it('should dispatch resetCounterAction when Reset button is clicked', () => {
    clickButton(fixture, '.reset-button');
    fixture.detectChanges();

    expect(mockStore.dispatch).toHaveBeenCalledWith(resetCounterAction());
  });
});
