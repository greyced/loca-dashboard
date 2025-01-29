import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentAttendanceComponent } from './dashboard-content-attendance.component';

describe('DashboardContentAttendanceComponent', () => {
  let component: DashboardContentAttendanceComponent;
  let fixture: ComponentFixture<DashboardContentAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContentAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
