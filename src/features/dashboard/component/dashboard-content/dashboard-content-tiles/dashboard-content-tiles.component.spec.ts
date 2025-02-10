import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentTilesComponent } from './dashboard-content-tiles.component';

describe('DashboardContentTilesComponent', () => {
  let component: DashboardContentTilesComponent;
  let fixture: ComponentFixture<DashboardContentTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardContentTilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
