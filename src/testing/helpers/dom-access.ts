import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export function getDebugElement<T>(fixture: ComponentFixture<T>, selector: string): DebugElement | undefined {
  return fixture.debugElement.query(By.css(selector));
}

export function getText<T>(fixture: ComponentFixture<T>, selector: string): string | undefined {
  return getDebugElement(fixture, selector)?.nativeElement.textContent;
}

export function clickButton<T>(fixture: ComponentFixture<T>, selector: string): void {
  const btn = getDebugElement(fixture, selector);
  if (btn) {
    btn.triggerEventHandler('click', null);
  }
}
