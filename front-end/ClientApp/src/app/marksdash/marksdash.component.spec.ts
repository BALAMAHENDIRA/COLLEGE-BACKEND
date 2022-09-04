import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksdashComponent } from './marksdash.component';

describe('MarksdashComponent', () => {
  let component: MarksdashComponent;
  let fixture: ComponentFixture<MarksdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
