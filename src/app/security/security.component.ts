import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-security-staff-apply',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityStaffApplyComponent {
  onSubmit() {
    alert('Your application has been submitted successfully!');
    // Here, you can add additional logic to send the form data to a backend API or service
  }
} 