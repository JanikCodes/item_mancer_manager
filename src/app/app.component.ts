import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/module/material/material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginModal } from './shared/modals/login/login.modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public opened: boolean = false;
  public user: any | null;

  readonly loginModal = inject(MatDialog);

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  public openLoginModal() {
    this.loginModal.open(LoginModal, {
      width: '500px',
    });
  }

  public logout(): void {
    this.authService.clearUser();
    this.router.navigateByUrl('');
  }
}
