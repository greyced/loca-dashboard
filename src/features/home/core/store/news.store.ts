
import { computed, inject, resource } from '@angular/core';
import { signalStore, withComputed, withProps } from '@ngrx/signals';
import { NewsService } from '../service/news.service';

export const NewsStore = signalStore(
    withProps(() => ({
        _newsService: inject(NewsService),
    })),
    withProps((store) => ({
        _newsStore: resource({
            loader: (param) => {
                console.log('param news', param);
                return store._newsService.getNews();
            }
        })
    })),
    withComputed((store) => ({
        news: computed(() => store._newsStore.asReadonly().value || [])
    }))
);