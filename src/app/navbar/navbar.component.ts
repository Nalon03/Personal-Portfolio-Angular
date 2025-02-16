import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

  constructor(
    private route: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 601px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.isMenuOpen = false;
        }
      });
  }

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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
