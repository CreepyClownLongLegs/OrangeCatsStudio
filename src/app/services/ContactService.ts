import emailjs from '@emailjs/browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

sendEmail(form: any) {
  return emailjs.send(
    'service_28dsa7m',
    'template_bcfgpna',
    {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      message: form.message,
      title: form.category,   // 👈 category becomes title
      time: form.phone || ''  // 👈 phone number goes here
    },
    'oNuSlXkxJs8A6T462'
  );
}
}
