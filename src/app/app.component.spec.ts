import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Firestore } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [Firestore, importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-c2103","appId":"1:305041648487:web:74308a7c43c702efbe1dc2","storageBucket":"simplecrm-c2103.appspot.com","apiKey":"AIzaSyARb-eJTwg-zSE9zlLmwgQnDWcsW7Z-zVw","authDomain":"simplecrm-c2103.firebaseapp.com","messagingSenderId":"305041648487"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have the 'simplecrm' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('simplecrm');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, simplecrm');
  // });
});
