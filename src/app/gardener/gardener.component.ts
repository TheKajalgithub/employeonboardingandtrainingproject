import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gardener',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './gardener.component.html',
  styleUrl: './gardener.component.css'
})
export class GardenerComponent {
  gardener = {
    fullName: '',
    contactNumber: '',
    experience: '',
    trainingDate: ''
  };
  previewMode = false;

  togglePreview() {
    this.previewMode = !this.previewMode;
  }

  onSubmit() {
    if (this.previewMode) {
      alert('Application Submitted Successfully!');
      this.resetForm();
    } else {
      this.togglePreview();
    }
  }

  resetForm() {
    this.gardener = { fullName: '', contactNumber: '', experience: '', trainingDate: '' };
    this.previewMode = false;
  }

}
