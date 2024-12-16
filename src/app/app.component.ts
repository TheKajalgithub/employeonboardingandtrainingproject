import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './home/nav/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink,RouterModule, NavbarComponent], // Added RouterLink to ensure navigation
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // fixed styleUrl to styleUrls
})
export class AppComponent {
  title = 'employeonboardingandtrainingproject';
}
