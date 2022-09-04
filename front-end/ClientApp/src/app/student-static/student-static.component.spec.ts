import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStaticComponent } from './student-static.component';

describe('StudentStaticComponent', () => {
  let component: StudentStaticComponent;
  let fixture: ComponentFixture<StudentStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
