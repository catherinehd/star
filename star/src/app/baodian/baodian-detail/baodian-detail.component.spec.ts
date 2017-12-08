import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaodianDetailComponent } from './baodian-detail.component';

describe('BaodianDetailComponent', () => {
  let component: BaodianDetailComponent;
  let fixture: ComponentFixture<BaodianDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaodianDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaodianDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
