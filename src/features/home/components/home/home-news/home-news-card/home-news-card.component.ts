import { Component, Input } from '@angular/core';
import { News } from '../../../../models/news.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-news-card',
  imports: [DatePipe],
  templateUrl: './home-news-card.component.html',
  styleUrl: './home-news-card.component.scss'
})
export class HomeNewsCardComponent {
  @Input({ required: true }) news!: News
}
