import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeComponent } from './pizze.component';

describe('PizzeComponent', () => {
  let component: PizzeComponent;
  let fixture: ComponentFixture<PizzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
