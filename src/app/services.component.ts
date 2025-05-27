// ==========================
// SERVICES COMPONENT
// ==========================

import { Component as ServicesComponentDef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@ServicesComponentDef({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor],
  template: `
    <section class="services">
      <h2>Servicios</h2>
      <div class="cards">
        <mat-card *ngFor="let servicio of servicios">
          <mat-icon>{{ servicio.icon }}</mat-icon>
          <h3>{{ servicio.nombre }}</h3>
        </mat-card>
      </div>
    </section>
  `,
  styles: [`
    .services { padding: 3rem 1rem; text-align: center; }
    .cards { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
    mat-card { padding: 1rem; width: 200px; text-align: center; }
  `]
})
export class ServicesComponent {
  servicios = [
    { nombre: 'Despacho Aduanal', icon: 'local_shipping' },
    { nombre: 'Comercialización', icon: 'store' },
    { nombre: 'Seguimiento Logístico', icon: 'track_changes' },
    { nombre: 'Gestión Integral', icon: 'manage_accounts' },
  ];
}
