import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { catchError, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected the typo (styleUrl -> styleUrls)
})
export class LoginComponent implements OnDestroy {
  email = '';
  password = '';
  role = '';  // Added role field
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthServiceService, private router: Router) {}

  /**
   * Handles the login logic
   */
  onLogin() {
    if (this.email && this.password && this.role) {  // Ensure role is selected
      this.authService.login(this.email, this.password, this.role)  // Send role to the auth service
        .pipe(
          takeUntil(this.destroy$),
          tap((response) => {
            console.log('Login successful:', response);

            const roles = response.roles ? response.roles : response.role;  // Handle the role based on the backend response
            localStorage.setItem('userRole', roles);

                 /*
            // Store the user role in localStorage
            localStorage.setItem('userRole', response.role);  // Save the role to localStorage
            */
            switch (roles) {
              case 'user':
                this.router.navigate(['/view']);
                break;
              case 'trainer':
                this.router.navigate(['/trainer']);
                break;
              case 'admin':
                this.router.navigate(['/admin']);
                break;
              default:
                this.router.navigate(['/view']);
                break;
            }
          }),
          catchError((error) => {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
            return [];  // Consider rethrowing or handling the error more effectively
          })
        )
        .subscribe();
    } else {
      alert('Please fill in all fields including role.');
    }
  }

  /**
   * Cleanup subscriptions on component destroy
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
