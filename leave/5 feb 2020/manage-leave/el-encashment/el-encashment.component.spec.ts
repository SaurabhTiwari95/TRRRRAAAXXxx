import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElEncashmentComponent } from './el-encashment.component';

describe('ElEncashmentComponent', () => {
  let component: ElEncashmentComponent;
  let fixture: ComponentFixture<ElEncashmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElEncashmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElEncashmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
