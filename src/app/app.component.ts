import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/module/material/material.module';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { AuthService } from './shared/services/auth/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { AppTab } from './app.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MaterialModule,
    TopBarComponent,
    MatTabsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public apps: AppTab[] = [
    AppTab.itemAppTab,
    AppTab.rarityAppTab,
    AppTab.attributeAppTab,
  ];

  public activeLink: string = '';
  public user: any | null;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  public navigateToSection(route: string) {
    this.router.navigateByUrl(route);

    this.activeLink = route;
  }
}
