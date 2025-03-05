import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "locadmin-34fcc", appId: "1:256051954427:web:b2125bc58e6eb26f73a65e", storageBucket: "locadmin-34fcc.firebasestorage.app", apiKey: "AIzaSyBJFe6IjBO-C4KY0L2TqnxaubD_wzF0LSo", authDomain: "locadmin-34fcc.firebaseapp.com", messagingSenderId: "256051954427", measurementId: "G-7KQW6HNS80" })), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ projectId: "locadmin-34fcc", appId: "1:256051954427:web:b2125bc58e6eb26f73a65e", storageBucket: "locadmin-34fcc.firebasestorage.app", apiKey: "AIzaSyBJFe6IjBO-C4KY0L2TqnxaubD_wzF0LSo", authDomain: "locadmin-34fcc.firebaseapp.com", messagingSenderId: "256051954427", measurementId: "G-7KQW6HNS80" })), provideFirestore(() => getFirestore())]
};

