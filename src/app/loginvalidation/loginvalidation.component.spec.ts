import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginvalidationComponent } from './loginvalidation.component';

describe('LoginvalidationComponent', () => {
  let component: LoginvalidationComponent;
  let fixture: ComponentFixture<LoginvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginvalidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
