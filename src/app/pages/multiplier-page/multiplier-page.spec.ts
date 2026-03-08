import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplierComponent } from './multiplier-page.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CounterStore, GeneralStore, selectCount, selectMultiplier } from 'stores';

describe('MultiplierComponent', () => {
  let component: MultiplierComponent;
  let fixture: ComponentFixture<MultiplierComponent>;
  let mockStore: MockStore<CounterStore & GeneralStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplierComponent],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);

    mockStore.overrideSelector(selectCount, 0);
    mockStore.overrideSelector(selectMultiplier, 1);
    mockStore.refreshState();
    vi.spyOn(mockStore, 'dispatch');

    fixture = TestBed.createComponent(MultiplierComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.multipliedCount()).toBe(0);
  });

  it('should display correct multiplied count based on count and multiplier selectors', () => {
    mockStore.overrideSelector(selectCount, 5);
    mockStore.overrideSelector(selectMultiplier, 3);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(component.multipliedCount()).toBe(15);
  });
});
