import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  description: string = 'This is the IT training module, covering essential topics for the department.';
  trainingModules: any[] = [
    {
      name: 'Sales',
      trainerName: 'Sri Singh'
    },
   
  ];

  constructor(private router: Router) {}

  // Method for navigation
  accessModule(module: any) {
    console.log('Accessing module:', module.name);
    this.router.navigate(['/trainer-sales']);  // Navigate to Trainer IT Page
  }
}


