import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormRestaurantComponent } from './dynamic-form-restaurant.component';

describe('DynamicFormRestaurantComponent', () => {
  let component: DynamicFormRestaurantComponent;
  let fixture: ComponentFixture<DynamicFormRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
