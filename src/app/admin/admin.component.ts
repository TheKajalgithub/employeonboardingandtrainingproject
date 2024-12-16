import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,RouterLink],
  providers: [HttpClient],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  admins: any[] = []; // Array to store fetched admin data
  apiUrl: string = 'http://localhost:8080/api/users'; // Update this URL with your backend API endpoint

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAdmins(); // Fetch data when the component loads
  }

  // Fetch all admins from the API
  fetchAdmins(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.admins = data;
      },
      error: (err) => {
        console.error('Error fetching User data:', err);
        alert('Failed to load admin data.');
      }
    });
  }

  // Delete an admin by ID
  deleteAdmin(id: number): void {
    if (confirm('Are you sure you want to delete this User?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          alert('User deleted successfully.');
          this.fetchAdmins(); // Refresh the data
        },
        error: (err) => {
          console.error('Error deleting User:', err);
          alert('Failed to delete User.');
        }
      });
    }
  }

 
}