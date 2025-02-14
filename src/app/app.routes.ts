import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./experience/experience.component').then(
        (c) => c.ExperienceComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog.component').then((c) => c.BlogComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (c) => c.PortfolioComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact-form/contact-form.component').then((c) => c.ContactFormComponent),
  },
];
