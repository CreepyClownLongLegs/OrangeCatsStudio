import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit(): void {
    this.titleService.setTitle('About Us | Orange Cats Studio 🐾');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Orange Cats Studio is a digital marketing studio built by two founders combining Web developmentand Digital Marketing to create websites and online structures that support digital marketing efforts and business growth.'
      },
      "name='description'"
    );
  }
}