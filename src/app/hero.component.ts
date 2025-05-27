// ==========================
// HERO COMPONENT
// ==========================

import { Component as HeroComponentDef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@HeroComponentDef({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <section class="hero">
      <h1>Soluciones Logísticas Aduanales</h1>
      <button mat-raised-button color="primary">Conócenos</button>
    </section>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 4rem 1rem;
      background: linear-gradient(to right, #1976d2, #42a5f5);
      color: white;
    }
  `]
})
export class HeroComponent {}
