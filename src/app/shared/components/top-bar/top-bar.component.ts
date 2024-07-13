import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../module/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth/auth.service';
import { LoginModal } from '../../modals/login/login.modal';

@Component({
  selector: 'top-bar-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MaterialModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
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
