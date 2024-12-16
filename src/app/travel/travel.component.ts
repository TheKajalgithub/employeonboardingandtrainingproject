import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {
  driver = {
    fullName: '',
    contactNumber: '',
    licenseNumber: '',
    trainingDate: ''
  };

  onSubmit() {
    console.log('Driver Application:', this.driver);
    alert('Application Submitted Successfully!');
    // Add additional logic to send the form data to the backend
  }

}
