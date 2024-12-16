import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private backendUrl = 'http://localhost:8080/api'; // Ensure the URL matches your Spring Boot base URL
  private localStorageKey = 'currentUser';

  private currentUserSubject = new BehaviorSubject<{
    userId: number;
    username: string;
    roles: string[];
  } | null>(null);

  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem(this.localStorageKey);
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  }

  /**
   * Registers a new user
   * @param userData Object containing name, email, phone number, password, and role
   */
  register(userData: {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: string;
  }): Observable<any> {
    const url = `${this.backendUrl}/register`;
    return this.http.post(url, userData).pipe(
      tap(() => console.log('Registration successful')),
      catchError(this.handleError)
    );
  }

  /**
   * Logs in a user
   * @param email User's email
   * @param password User's password
   * @param role The role selected during login
   */











  
  login(email: string, password: string, role: string): Observable<any> {
    const url = `${this.backendUrl}/login`;
    const loginData = { email, password};

    return this.http.post<any>(url, loginData).pipe(
      tap((response) => {
        if (response && response.userId && response.name && Array.isArray(response.roles)) {
          // Store user data and role in localStorage
          const currentUser = {
            userId: parseInt(response.userId, 10),
            username: response.name,
            roles: response.roles,  // Ensure roles is an array
          };
          this.currentUserSubject.next(currentUser);
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(currentUser));
          }
        } else {
          console.error('Invalid login response structure:', response);
        }
      }),
      catchError(this.handleError)
    );
  }
    

  /**
   * Logs out the current user
   */
  logout(): void {
    this.currentUserSubject.next(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.localStorageKey);
    }
  }

  /**
   * Retrieves the current user's ID
   */
  getCurrentUserId(): number | null {
    return this.currentUserSubject.value?.userId ?? null;
  }

  /**
   * Retrieves the current user's roles
   */
  getCurrentUserRoles(): string[] {
    return this.currentUserSubject.value?.roles ?? [];
  }

  /**
   * Generic error handler
   */
  private handleError(error: any): Observable<never> {
    console.error('Error occurred:', error);
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    if (error.error && error.error.message) {
      errorMessage = error.error.message;  // Use backend error message if available
    }
    alert(errorMessage);  // Show an alert for the user
    return throwError(() => new Error(errorMessage));
  }
}
