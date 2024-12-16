import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  contact = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit() {
    // Handle form submission logic here, like sending the data to an API
    console.log('Form Submitted!', this.contact);
    alert("form submitted successfully!.");

    // Reset the form after submission
    this.contact = { name: '', email: '', phone: '' };
  }

}
