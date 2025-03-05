import { Component, inject } from '@angular/core';
import { NewsService } from '../../../core/service/news.service';
import { NewsStore } from '../../../core/store/news.store';
import { DatePipe, JsonPipe, NgFor, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NEWS } from './news';
import { News } from '../../../models/news.model';
import { HomeNewsCardComponent } from './home-news-card/home-news-card.component';

@Component({
  selector: 'app-home-news',
  imports: [NgFor, NgForOf, HomeNewsCardComponent],
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
  providers: [NewsStore, NewsService]
})
export class HomeNewsComponent {
  #store = inject(NewsStore);

  key ='26da6094aa3f4c828fa8f0891445fd25'

  news = this.#store.newsStore.value.asReadonly();

  articles: News[] = NEWS.articles as unknown as News[];

  private readonly http = inject(HttpClient);

  constructor(){
    this.initArticles();
  }

  initArticles() {
    return this.http.get<{ articles: any[]}>('/v2/top-headlines?sources=techcrunch&apiKey=' + this.key).subscribe((res) => {
      console.log('res', res);
      this.articles = res.articles;
    })
  }



}
