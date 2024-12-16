import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of, Subject, takeUntil, tap } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [HttpClient],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {
  name = ''; // User's name
  email = ''; // User's email
  phoneNumber = ''; // User's phone number
  password = ''; // Password
  confirmPassword = ''; // Confirm password
  role = ''; // Single role selection (string)
  roleOptions: string[] = ['Admin', 'User', 'Trainer']; // Example roles

  private destroy$ = new Subject<void>();

  constructor(private router: Router, private authService: AuthServiceService) {}

  /**
   * Handles the registration logic
   */
  onRegister() {
    if (
      this.name &&
      this.email &&
      this.phoneNumber &&
      this.password &&
      this.password === this.confirmPassword &&
      this.role
    ) {
      const userData = {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        role: this.role // Aligns with backend model
      };

      this.authService.register(userData)
        .pipe(
          takeUntil(this.destroy$),
          tap(() => {
            alert('Registration successful! Redirecting to login.');
            this.router.navigate(['/login']);
          }),
          catchError((error) => {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
            return of(null);
          })
        )
        .subscribe();
    } else {
      alert('Please ensure all fields are filled out correctly, passwords match, and a role is selected.');
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