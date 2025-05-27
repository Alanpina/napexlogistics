import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  template: `
    <section class="services-section">
      <div class="section-header">
        <h2 class="section-title">Nuestros Servicios</h2>
        <p class="section-subtitle">Soluciones logísticas integrales para optimizar tu cadena de suministro</p>
        <div class="divider"></div>
      </div>

      <div class="services-grid">
        <mat-card *ngFor="let servicio of servicios" class="service-card" [style.--hue]="servicio.colorHue">
          <div class="card-icon-container">
            <mat-icon class="card-icon">{{ servicio.icon }}</mat-icon>
          </div>
          <h3 class="service-name">{{ servicio.nombre }}</h3>
          <p class="service-description">{{ servicio.descripcion }}</p>
          <!-- <button mat-button class="learn-more-btn">Saber más</button> -->
        </mat-card>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 6rem 1rem;
      background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
      position: relative;
      overflow: hidden;
    }

    .section-header {
      max-width: 800px;
      margin: 0 auto 3rem;
      text-align: center;
    }

    .section-title {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      color: #0d47a1;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .section-subtitle {
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      color: #64748b;
      margin-bottom: 1.5rem;
    }

    .divider {
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #0d47a1, #1976d2);
      margin: 0 auto;
      border-radius: 2px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .service-card {
      padding: 2.5rem 1.5rem;
      border-radius: 12px;
      text-align: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
      background: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.05);
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: hsl(var(--hue), 80%, 60%);
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
    }

    .card-icon-container {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: hsl(var(--hue), 80%, 96%);
      border-radius: 50%;
      transition: transform 0.3s ease;
    }

    .service-card:hover .card-icon-container {
      transform: scale(1.1) rotate(5deg);
    }

    .card-icon {
      font-size: 2.5rem;
      width: auto;
      height: auto;
      color: hsl(var(--hue), 80%, 50%);
    }

    .service-name {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #1e293b;
      font-weight: 600;
    }

    .service-description {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      min-height: 60px;
    }

    .learn-more-btn {
      color: hsl(var(--hue), 80%, 50%);
      font-weight: 500;
      position: relative;
      padding: 0.5rem 1rem;
    }

    .learn-more-btn::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: hsl(var(--hue), 80%, 50%);
      transition: width 0.3s ease;
    }

    .learn-more-btn:hover::after {
      width: 100%;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .services-section {
        padding: 4rem 1rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
      }
    }
  `]
})
export class ServicesComponent {
  servicios = [
    {
      nombre: 'Logística Internacional',
      icon: 'public',
      descripcion: 'Movemos tu mercancía en cualquier parte del mundo con soluciones personalizadas.',
      colorHue: '225'
    },
    {
      nombre: 'Trámites Aduaneros',
      icon: 'gavel',
      descripcion: 'Gestionamos eficientemente toda la documentación y requisitos legales para tu operación.',
      colorHue: '225'
    },
    {
      nombre: 'Transporte de Mercancías',
      icon: 'local_shipping',
      descripcion: 'Opciones multimodales terrestres, aéreas y marítimas adaptadas a tus necesidades.',
      colorHue: '225'
    },
    {
      nombre: 'Almacenamiento',
      icon: 'warehouse',
      descripcion: 'Soluciones seguras, tecnificadas y estratégicamente ubicadas para tus productos.',
      colorHue: '225'
    },
  ];
}
