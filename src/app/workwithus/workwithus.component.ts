import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-workwithus',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './workwithus.component.html',
  styleUrl: './workwithus.component.css'
})
export class WorkwithusComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit(): void {
    this.titleService.setTitle('Work With Us | Orange Cats Studio 🐾');
    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Choose the right website, SEO Visibility and Digital Marketing Strategy support for your business. Explore Orange Cats Studio packages, add-ons and services, then contact us to discuss the next step.'
      },
      "name='description'"
    );
  }
}