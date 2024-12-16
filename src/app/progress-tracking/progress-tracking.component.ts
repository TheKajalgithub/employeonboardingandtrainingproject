import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-progress-tracking',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './progress-tracking.component.html',
  styleUrls: ['./progress-tracking.component.css']
})
export class ProgressTrackingComponent {

  apiUrl: string = 'http://localhost:8080/api/training-modules'; // Update this URL with your backend API endpoint


  trainingModules = [
    {
      name: 'Module 1',
      description: 'Introduction to Finance',
      trainerName: 'Smriti Samantray',
      progress: 70
    },
    {
      name: 'Module 2',
      description: 'Financial Analysis',
      trainerName: 'Sri Srivastab',
      progress: 40
    },
    {
      name: 'Module 3',
      description: 'Investment Strategies',
      trainerName: 'Amrit SinghDeo',
      progress: 90
    }
   
  ];
  static Finance1: readonly any[] | Type<any>;
}