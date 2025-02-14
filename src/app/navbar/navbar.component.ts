import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private route: Router) {}

  navigateHome() {
    this.route.navigate(['home']);
  }
  navigateAbout() {
    this.route.navigate(['about']);
  }

  navigateExperience() {
    this.route.navigate(['experience']);
  }

  navigateBlog() {
    this.route.navigate(['blog']);
  }
  navigatePortfolio() {
    this.route.navigate(['portfolio']);
  }
}
