import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultystaticComponent } from './facultystatic.component';

describe('FacultystaticComponent', () => {
  let component: FacultystaticComponent;
  let fixture: ComponentFixture<FacultystaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultystaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultystaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
