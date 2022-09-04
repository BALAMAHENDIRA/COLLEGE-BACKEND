import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartStaticComponent } from './depart-static.component';

describe('DepartStaticComponent', () => {
  let component: DepartStaticComponent;
  let fixture: ComponentFixture<DepartStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
