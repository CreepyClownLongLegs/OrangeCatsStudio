import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})
export class PortofolioComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Portfolio | Orange Cats Studio 🐾');
    this.meta.updateTag({
      name: 'description',
      content: 'Explore client websites created by Orange Cats Studio and upcoming case studies on SEO Visibility & Digital Marketing strategies.'
    });
  }
}
