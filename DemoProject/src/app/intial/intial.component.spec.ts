import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntialComponent } from './intial.component';

describe('IntialComponent', () => {
  let component: IntialComponent;
  let fixture: ComponentFixture<IntialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
