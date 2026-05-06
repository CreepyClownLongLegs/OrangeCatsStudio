import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ContactService } from '../services/ContactService';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private titleService: Title,
    private metaService: Meta
  ) {}
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    category: [''],
    message: ['', Validators.required],
  });
  ngOnInit(): void {
    this.titleService.setTitle('Contact Us | Orange Cats Studio');
    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Contact Orange Cats Studio about your website, SEO Visibility or digital marketing strategy. Share what your business needs so we can understand the current setup and possible next steps.'
      },
      "name='description'"
    );
  }
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