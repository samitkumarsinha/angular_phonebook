import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbcreateComponent } from './pbcreate.component';

describe('PbcreateComponent', () => {
  let component: PbcreateComponent;
  let fixture: ComponentFixture<PbcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
