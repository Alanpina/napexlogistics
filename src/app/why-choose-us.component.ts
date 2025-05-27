// ==========================
// WHY CHOOSE US COMPONENT
// ==========================

import { Component as WhyChooseUsComponentDef } from '@angular/core';

@WhyChooseUsComponentDef({
  selector: 'app-why-choose-us',
  standalone: true,
  template: `
    <section class="why">
      <h2>¿Por Qué Elegirnos?</h2>
      <p>Contamos con un equipo altamente capacitado, procesos optimizados y atención personalizada para cada cliente.</p>
    </section>
  `,
  styles: [`
    .why { padding: 3rem 1rem; background-color: #f5f5f5; text-align: center; }
  `]
})
export class WhyChooseUsComponent {}
