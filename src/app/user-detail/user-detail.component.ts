import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../firebase-services/user.service';
import { User } from '../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userID: string | undefined = '';
  user = new User();

  constructor(private route: ActivatedRoute,
    private UserService: UserService,
    public dialog: MatDialog) { }

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

  openDialogEditUser() {
    const dialog = this.dialog.open(DialogEditUserComponent, {
      data: { user: this.user }
    });
  }

  openDialogEditAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent, {
      data: { user: this.user }
    });
  }


}
