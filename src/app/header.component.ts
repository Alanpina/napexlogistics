// ==========================
// HEADER COMPONENT
// ==========================

import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span class="logo">NAPEX LOGISTICS</span>
      <span class="spacer"></span>
      <button mat-button>Inicio</button>
      <button mat-button>Nosotros</button>
      <button mat-button>Servicios</button>
    </mat-toolbar>
  `,
  styles: [`
    .logo { font-weight: bold; }
    .spacer { flex: 1 1 auto; }
  `]
})
export class HeaderComponent {}
