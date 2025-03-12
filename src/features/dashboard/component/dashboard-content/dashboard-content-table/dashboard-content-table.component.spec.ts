import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentTableComponent } from './dashboard-content-table.component';

describe('DashboardContentTableComponent', () => {
  let component: DashboardContentTableComponent;
  let fixture: ComponentFixture<DashboardContentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContentTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
