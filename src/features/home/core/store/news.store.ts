
import { computed, inject, resource } from '@angular/core';
import { signalStore, withComputed, withProps } from '@ngrx/signals';
import { NewsService } from '../service/news.service';

export const NewsStore = signalStore(
    withProps(() => ({
        _newsService: inject(NewsService),
    })),
    withProps((store) => ({
        newsStore: store._newsService.newsResource
    })),
    withComputed((store) => ({
        news: computed(() => store.newsStore.asReadonly().value || [])
    }))
);