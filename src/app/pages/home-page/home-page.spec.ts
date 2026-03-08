import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { getDebugElement, getText } from 'testing';

import { HomeComponent } from './home-page.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome title', () => {
    expect(getText(fixture, '.section-title')).toBe('Welcome to the home page');
  });

  it('should display the project description', () => {
    expect(getText(fixture, '.section-description')).toContain('playground for learning and experimenting with NGRX');
  });

  it('should render a button that navigates to /counter', () => {
    const link = getDebugElement(fixture, 'button[routerLink]');

    expect(link).toBeTruthy();
    expect(link!.attributes['routerLink']).toBe('/counter');
  });

  it('should have the correct button text', () => {
    expect(getText(fixture, '.btn-orange')).toContain('Navigate to Counter');
  });
});
