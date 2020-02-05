import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherCreationComponent } from './voucher-creation.component';

describe('VoucherCreationComponent', () => {
  let component: VoucherCreationComponent;
  let fixture: ComponentFixture<VoucherCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
