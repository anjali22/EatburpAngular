import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMenuFormComponent } from './dynamic-menu-form.component';

describe('DynamicMenuFormComponent', () => {
  let component: DynamicMenuFormComponent;
  let fixture: ComponentFixture<DynamicMenuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMenuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
