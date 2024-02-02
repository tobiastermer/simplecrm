import { TestBed } from '@angular/core/testing';
import { DialogEditUserComponent } from './dialog-edit-user.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('DialogEditUserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule, MatDialogRef, 
        BrowserAnimationsModule, // Benötigt für Material Dialogs
        provideFirebaseApp(() => initializeApp({
          projectId: "simplecrm-c2103",
          appId: "1:305041648487:web:74308a7c43c702efbe1dc2",
          storageBucket: "simplecrm-c2103.appspot.com",
          apiKey: "AIzaSyARb-eJTwg-zSE9zlLmwgQnDWcsW7Z-zVw",
          authDomain: "simplecrm-c2103.firebaseapp.com",
          messagingSenderId: "305041648487"
        })),
        provideFirestore(() => getFirestore()),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Um unbekannte Elemente und Attribute zu ignorieren
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DialogEditUserComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
