import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaninoEditComponent } from './panino-edit.component';

describe('PaninoEditComponent', () => {
  let component: PaninoEditComponent;
  let fixture: ComponentFixture<PaninoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaninoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaninoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
