import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddituserComponent } from './eddituser.component';

describe('EddituserComponent', () => {
  let component: EddituserComponent;
  let fixture: ComponentFixture<EddituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EddituserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EddituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
