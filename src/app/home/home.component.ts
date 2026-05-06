import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit(): void {
    this.titleService.setTitle('Digital Marketing Studio | Orange Cats Studio 🐾');
    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Orange Cats Studio builds search-ready websites and digital marketing strategies with SEO Visibility at the core. Explore how we help businesses improve their website, visibility and marketing direction.'
      },
      "name='description'"
    );
  }
}