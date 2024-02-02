import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserService } from '../../firebase-services/user.service';
import { User } from '../../../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, MatDatepickerModule, MatNativeDateModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user;
  birthDate;
  loading: boolean = false;

  constructor(
    private UserService: UserService, 
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user ? new User(data.user) : new User();
    this.birthDate = data.user && data.user.birthDate ? new Date(data.user.birthDate) : undefined;
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : 0;
    console.log('Current user is ', this.user);
    if (this.user.toJSON) {
      this.UserService.updateUser(this.user.toJSON());
    }
    this.loading = false;
    this.dialogRef.close(); // Schließen des Dialogs  } 
    console.log('Current user is ', this.user);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
