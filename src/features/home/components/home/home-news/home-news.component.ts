import { Component, inject } from '@angular/core';
import { NewsService } from '../../../core/service/news.service';
import { NewsStore } from '../../../core/store/news.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home-news',
  imports: [JsonPipe],
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
  providers: [NewsStore, NewsService]
})
export class HomeNewsComponent {
  #store = inject(NewsStore);

  news = this.#store.news;
}
