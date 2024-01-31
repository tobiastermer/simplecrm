import { Component } from '@angular/core';
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
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { UserService } from '../firebase-services/user.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, MatDatepickerModule, MatNativeDateModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user: User;
  birthDate: Date | undefined;
  loading: boolean = false;

  constructor(private UserService: UserService, public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    this.user = new User();
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : 0;
    console.log('Current user is ', this.user);
    if (this.user.toJSON) {
      this.UserService.addUser(this.user.toJSON());
    }
    this.loading = false;
    this.dialogRef.close(); // Schließen des Dialogs  }  
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
