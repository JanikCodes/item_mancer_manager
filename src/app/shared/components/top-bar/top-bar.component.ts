import { Component, inject, input, output } from '@angular/core';
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
export class TopBarComponent {
  public opened: boolean = false;

  public user = input<any>();
  public onMenuClicked = output<void>();

  readonly loginModal = inject(MatDialog);

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

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
