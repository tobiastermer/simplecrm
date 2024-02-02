import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent],
      providers: [ActivatedRoute, importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-c2103","appId":"1:305041648487:web:74308a7c43c702efbe1dc2","storageBucket":"simplecrm-c2103.appspot.com","apiKey":"AIzaSyARb-eJTwg-zSE9zlLmwgQnDWcsW7Z-zVw","authDomain":"simplecrm-c2103.firebaseapp.com","messagingSenderId":"305041648487"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
