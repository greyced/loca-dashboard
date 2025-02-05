import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDialogCardComponent } from './manager-dialog-card.component';

describe('ManagerDialogCardComponent', () => {
  let component: ManagerDialogCardComponent;
  let fixture: ComponentFixture<ManagerDialogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerDialogCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDialogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
