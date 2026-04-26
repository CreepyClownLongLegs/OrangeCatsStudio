import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkwithusComponent } from './workwithus/workwithus.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Your Creator Studio'},
    {path: 'workwithus', component: WorkwithusComponent, title: 'Work With Us'},
    {path: 'portfolio', component: PortofolioComponent, title: 'Portfolio'},
    {path: 'about', component: AboutusComponent, title: 'About Us'},
    {path: 'contact', component: ContactComponent, title: 'Contact Us'}
];
