import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-trainer-page',
  standalone: true,  // Marking this component as standalone
  imports: [CommonModule, FormsModule,RouterModule], // Only the required imports for standalone
  templateUrl: './trainer-finance.component.html',
  styleUrls: ['./trainer-finance.component.css']
})
export class TrainerFinanceComponent {


  constructor(private  router:Router){}
  /*
  trainingModules: any[] = [
    {
      name: 'Module 1: Financial Analysis',
      fileUrl: 'assets/modules/financial_analysis.pdf'
    },
    {
      name: 'Module 2: Budget Planning',
      fileUrl: 'assets/modules/budget_planning.pdf'
    },
    {
      name: 'Module 3: Investment Strategies',
      fileUrl: 'assets/modules/investment_strategies.pdf'
    }
  ];

  downloadModule(fileUrl: string): void {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'module.pdf';
    link.click();
  }*/

     // Array of modules with name and an empty fileUrl (for file upload tracking)
  trainingModules = [
    { name: 'Financial Analysis Basics', fileUrl: '' },
    { name: 'Budget Planning', fileUrl: '' },
    { name: 'Investment Strategies', fileUrl: '' }
  ];

  // Method to handle file selection and store the file URL
  onFileSelected(event: any, module: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Create a URL for the selected file (in a real-world app, you'd likely upload this file somewhere)
      const fileUrl = URL.createObjectURL(file); 
      module.fileUrl = fileUrl; // Store the URL in the module
      console.log(`File selected for ${module.name}:`, fileUrl);
    }
  }

  // Method to handle downloading the file
  downloadModule(module: any) {
    if (module.fileUrl) {
      const link = document.createElement('a'); // Create an invisible download link
      link.href = module.fileUrl; // Set the file URL
      link.download = module.name; // Set the file name for downloading
      link.click(); // Trigger the download
    } else {
      alert('No file uploaded for this module.');
    }
  }

  navigateToProgressTracking() {
    this.router.navigate(['/progress-tracking']);
  }

}