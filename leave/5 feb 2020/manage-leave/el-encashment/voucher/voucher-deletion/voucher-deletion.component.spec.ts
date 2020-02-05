import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherDeletionComponent } from './voucher-deletion.component';

describe('VoucherDeletionComponent', () => {
  let component: VoucherDeletionComponent;
  let fixture: ComponentFixture<VoucherDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
