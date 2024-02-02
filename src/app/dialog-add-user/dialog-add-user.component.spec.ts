import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddUserComponent, FirestoreModule],
      providers: [Firestore, importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-c2103","appId":"1:305041648487:web:74308a7c43c702efbe1dc2","storageBucket":"simplecrm-c2103.appspot.com","apiKey":"AIzaSyARb-eJTwg-zSE9zlLmwgQnDWcsW7Z-zVw","authDomain":"simplecrm-c2103.firebaseapp.com","messagingSenderId":"305041648487"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
