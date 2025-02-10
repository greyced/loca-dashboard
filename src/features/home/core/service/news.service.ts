import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { updateDoc, where } from 'firebase/firestore';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  #collection = 'news';

  readonly #firestore = inject(Firestore);

  async createNews(news: News) {
    const docRef = await addDoc(collection(this.#firestore, this.#collection), news);
    console.log("Document written with ID: ", docRef.id);
  }

  async updateNews(news: News) {
    const docRefs = await getDocs(query(collection(this.#firestore, this.#collection), where("id", "==", news.id)));
    await updateDoc(docRefs.docs[0].ref, {
      ...news
    });
  }

  async getNews() {
    return (
      await getDocs(query(collection(this.#firestore, this.#collection)))
    ).docs.map((robots) => robots.data() as News);
  }
}
