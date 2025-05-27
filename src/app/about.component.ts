// ==========================
// ABOUT COMPONENT
// ==========================

import { Component as AboutComponentDef } from '@angular/core';

@AboutComponentDef({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about">
      <h2>¿Quiénes Somos?</h2>
      <p>En Napex Logistics nos especializamos en ofrecer soluciones integrales en logística y despacho aduanal, adaptándonos a las necesidades de cada cliente.</p>
    </section>
  `,
  styles: [`
    .about { padding: 3rem 1rem; text-align: center; }
  `]
})
export class AboutComponent {}
