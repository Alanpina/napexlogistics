// ==========================
// APP COMPONENT (ROOT)
// ==========================

import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { ServicesComponent } from './services.component';
import { WhyChooseUsComponent } from './why-choose-us.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-why-choose-us></app-why-choose-us>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {}
