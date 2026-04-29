import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../services/ContactService';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    category: [''],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.contactForm.invalid) return;

  this.contactService.sendEmail(this.contactForm.value)
    .then(() => {
      alert('Message sent 🐾');
    })
    .catch(() => {
      alert('Something went wrong');
    });
}
}
