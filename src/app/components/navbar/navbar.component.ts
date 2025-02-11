import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  menuOpen = false;

  navLinks = [
    { label: 'The what?', path: '/', icon: '', hasBorder: true },
    { label: 'Mentors', path: '/', icon: 'mentors.png', hasBorder: false },
    { label: 'Events', path: '/', icon: 'events.png', hasBorder: false },
    { label: 'Coupons', path: '/', icon: 'coupons.png', hasBorder: false },
    { label: 'Courses', path: '/', icon: 'courses.png', hasBorder: false },
    { label: 'Jobs', path: '/', icon: 'jobs.png', hasBorder: false },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
