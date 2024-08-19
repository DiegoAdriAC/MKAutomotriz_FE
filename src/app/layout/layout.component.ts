import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav; 
  isVisible: boolean = true;

  openModule: boolean = false;

  constructor(
    private router: Router,
  ) {
  }

  toggleMenu(): void {
    this.sidenav.toggle();
  }

  logout(): void {
    this.router.navigate(['/']);
  }
}
