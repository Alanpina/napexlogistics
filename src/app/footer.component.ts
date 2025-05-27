// ==========================
// FOOTER COMPONENT
// ==========================

import { Component as FooterComponentDef } from '@angular/core';

@FooterComponentDef({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p><strong>Contacto:</strong> Paulina Medina – Comercial</p>
      <p>Cel. +52 314 102 9592</p>
      <p>© 2025 Napex Logistics. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 2.5rem 1rem;
      background-color: #0d47a1;
      color: white;
    }
  `]
})
export class FooterComponent {}
