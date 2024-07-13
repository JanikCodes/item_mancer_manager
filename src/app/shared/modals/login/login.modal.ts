import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MaterialModule } from '../../module/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpService } from '../../services/http/http.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'login-modal',
  templateUrl: 'login.modal.html',
  styleUrl: 'login.modal.scss',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModal {
  readonly dialogRef = inject(MatDialogRef<LoginModal>);

  public hidePassword = signal(true);

  public loginForm = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  public changePasswordVisibility(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  public login() {
    const loginObj = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };

    this.httpService.post('login', loginObj).subscribe((result: any) => {
      if (result) {
        this.authService.setUser(result);
      } else {
        console.log('Invalid credentials');
      }
    });
  }
}
