import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-c2103","appId":"1:305041648487:web:74308a7c43c702efbe1dc2","storageBucket":"simplecrm-c2103.appspot.com","apiKey":"AIzaSyARb-eJTwg-zSE9zlLmwgQnDWcsW7Z-zVw","authDomain":"simplecrm-c2103.firebaseapp.com","messagingSenderId":"305041648487"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
