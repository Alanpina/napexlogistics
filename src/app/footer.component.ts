// ==========================
// FOOTER COMPONENT
// ==========================

import { Component as FooterComponentDef } from '@angular/core';

@FooterComponentDef({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© 2025 Napex Logistics. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    .footer { text-align: center; padding: 2rem 1rem; background-color: #1976d2; color: white; }
  `]
})
export class FooterComponent {}
