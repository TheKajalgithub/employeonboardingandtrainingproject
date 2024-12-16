import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-trainer-sales',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './trainer-sales.component.html',
  styleUrl: './trainer-sales.component.css'
})
export class TrainerSalesComponent {
 // Array of IT training modules (for example)
  trainingModules = [
    { name: 'SALES', fileUrl: '' },
    
  ];
moduleName: any;
trainerName: any;


constructor(private router:Router){}

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

  // Method to navigate to the progress tracking page
  navigateToProgressTracking() {
    this.router.navigate(['/progress-tracking']);
  }
  
}


