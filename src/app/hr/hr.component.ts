import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.css'
})
export class HrComponent {
  description: string = 'This is the IT training module, covering essential topics for the department.';
  trainingModules: any[] = [
    {
      name: 'HR',
      trainerName: 'Kajal Prusty'
    },
   
  ];

  constructor(private router: Router) {}

  // Method for navigation
  accessModule(module: any) {
    console.log('Accessing module:', module.name);
    this.router.navigate(['/trainer-hr']);  // Navigate to Trainer IT Page
  }
}