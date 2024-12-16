import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-it-page',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './it-page.component.html',
  styleUrl: './it-page.component.css'
})
export class ItPageComponent {
  description: string = 'This is the IT training module, covering essential topics for the department.';
  trainingModules: any[] = [
    {
      name: 'Web Developer',
      description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript.',
      trainerName: 'Smita Sahoo'
    },
    {
      name: 'AI/ML Engineer',
      description: 'Explore the world of Artificial Intelligence and Machine Learning concepts and implementation.',
      trainerName: 'Soham Bhatacharya'
    },
    {
      name: 'Cloud Engineer',
      description: 'Understand cloud infrastructure, deployment, and management of cloud services.',
      trainerName: 'Adyasha Swain'
    }
  ];

  constructor(private router: Router) {}

  accessModule(module: any) {
    console.log('Accessing module:', module.name);
    this.router.navigate(['/trainer-it']);  // Navigate to Trainer IT Page
  }
}


