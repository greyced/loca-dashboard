import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsCardComponent } from './home-news-card.component';

describe('HomeNewsCardComponent', () => {
  let component: HomeNewsCardComponent;
  let fixture: ComponentFixture<HomeNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNewsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
