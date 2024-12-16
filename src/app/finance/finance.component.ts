import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RedirectCommand, Router, RouterModule, } from '@angular/router';

@Component({
  selector: 'app-finance',
  standalone: true,                
  imports: [CommonModule,FormsModule,RouterModule],          // Only use imports with standalone components
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  description: string = 'This is the finance training module, covering essential topics for the department.';
  trainingModules: any[] = [
    {
      name: 'Financial Analysis Basics',
      description: 'Learn the basics of financial analysis, including ratio calculations and balance sheets.',
      trainerName: 'Sharmila Pradhan'
    },
    {
      name: 'Budget Planning',
      description: 'An overview of creating and managing budgets effectively within the organization.',
      trainerName: 'Sunita Rout'
    },
    {
      name: 'Investment Strategies',
      description: 'A guide on corporate investment strategies and managing risks.',
      trainerName: 'Gayatri Sasmal'
    }
  ];

  
  constructor(private router: Router) {}

  accessModule(module: any) {
    console.log('Accessing module:', module.name);
    this.router.navigate(['/trainer']); 
  
  }
}