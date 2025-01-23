import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCardsContainerComponent } from './manager-cards-container.component';

describe('ManagerCardsContainerComponent', () => {
  let component: ManagerCardsContainerComponent;
  let fixture: ComponentFixture<ManagerCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerCardsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
