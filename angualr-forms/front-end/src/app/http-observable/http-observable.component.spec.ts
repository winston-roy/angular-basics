import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpObservableComponent } from './http-observable.component';

describe('HttpObservableComponent', () => {
  let component: HttpObservableComponent;
  let fixture: ComponentFixture<HttpObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpObservableComponent]
    });
    fixture = TestBed.createComponent(HttpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
