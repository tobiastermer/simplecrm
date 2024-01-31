import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../firebase-services/user.service';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userID: string | undefined = '';
  user = new User();

  constructor(private route: ActivatedRoute, private UserService: UserService) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id') ?? undefined;
    if (this.userID) {
      console.log(this.userID);
      this.UserService.getUser(this.userID); // Starten des Datenabrufprozesses
      this.UserService.currentUser.subscribe(user => {
        if (user) {
          this.user = user;
          console.log(user); // Loggen des User-Objekts, sobald es verfügbar ist
        }
      });
    }
  }



}
