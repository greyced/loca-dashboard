import { Injectable, signal } from "@angular/core";
import { News } from "../../models/news.model";
import { httpResource, HttpResourceRef } from "@angular/common/http";
import { User } from "../../../../models/user";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly baseUrl = 'https://loca-dashboard-back.onrender.com';

  user = signal<User | null>(null);
  newNews = signal<Partial<News | null>>(null);
  realEstateToRemoveId = signal<string | null>(null);

  newsResource: HttpResourceRef<News[] | undefined> = httpResource<News[]>(() => {
    return {
      method: 'GET',
      url: `${this.baseUrl}/news`,
    }
  }, {
    defaultValue: []
  });


  newNewsResource: HttpResourceRef<News | undefined> = httpResource(() => {
    return {
      url: `${this.baseUrl}/news`,
      method: 'POST',
      body: this.newNews(),
      headers: {
        'Content-type': 'application/json'
      }
    }
  });

}
