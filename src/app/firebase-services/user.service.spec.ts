import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Firestore } from '@angular/fire/firestore';

describe('NoteListService', () => {
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserService],
      providers: [Firestore]
    })
    .compileComponents();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
