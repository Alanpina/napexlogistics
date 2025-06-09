import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, MatButtonModule],
  template: `
    <section class="services-section">
      <div class="background-pattern"></div>

      <div class="section-header">
        <h2 class="section-title">
          <span class="title-line">Nuestros Servicios</span>
          <span class="title-decorator"></span>
        </h2>
        <p class="section-subtitle">
          Soluciones <span class="highlight">logísticas integrales</span> diseñadas para optimizar
          cada eslabón de tu cadena de suministro
        </p>
      </div>

      <div class="services-container">
        <div class="services-grid">
          <mat-card *ngFor="let servicio of servicios" class="service-card" [style.--hue]="servicio.colorHue">
            <div class="card-badge">{{ servicio.badge }}</div>
            <div class="card-icon-container">
              <mat-icon class="card-icon">{{ servicio.icon }}</mat-icon>
            </div>
            <h3 class="service-name">{{ servicio.nombre }}</h3>
            <p class="service-description">{{ servicio.descripcion }}</p>
            <ul class="service-features">
              <li *ngFor="let feature of servicio.features">{{ feature }}</li>
            </ul>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Base Styles */
    .services-section {
      position: relative;
      padding: 8rem 1rem;
      background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
      overflow: hidden;
    }

    .background-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(rgba(38, 56, 110, 0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.6;
      z-index: 0;
    }

    /* Header Styles */
    .section-header {
      max-width: 800px;
      margin: 0 auto 4rem;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      line-height: 1.2;
      color: #1e3b6f;
      margin-bottom: 1.5rem;
    }

    .title-decorator {
      display: block;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #7ec142, #1e3b6f);
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    .section-subtitle {
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      line-height: 1.6;
      color: #4a5568;
      max-width: 700px;
      margin: 0 auto;
    }

    .highlight {
      color: #1e3b6f;
      font-weight: 600;
    }

    /* Services Grid */
    .services-container {
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
      padding: 0 1.5rem;
    }

    /* Service Card */
    .service-card {
      padding: 2.5rem 2rem;
      border-radius: 16px;
      background: white;
      box-shadow: 0 10px 30px rgba(38, 56, 110, 0.08);
      border: 1px solid rgba(38, 56, 110, 0.05);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: #7ec142;
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(38, 56, 110, 0.15);
    }

    .card-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: #7ec142;
      color: hsl(var(--hue), 0%, 100%);
      padding: 0.3rem 1rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .card-icon-container {
      width: 90px;
      height: 90px;
      margin: 0 auto 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: hsl(var(--hue), 0%, 96%);
      border-radius: 50%;
      transition: all 0.4s ease;
    }

    .service-card:hover .card-icon-container {
      transform: scale(1.1) rotate(5deg);
      background: hsl(var(--hue), 0%, 92%);
    }

    .card-icon {
      font-size: 1.6rem;
      color: #7ec142;
    }

    .service-name {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1e3b6f;
      margin-bottom: 1.5rem;
      line-height: 1.3;
    }

    .service-description {
      color: #4a5568;
      line-height: 1.7;
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem;
      text-align: left;
      flex-grow: 1;
    }

    .service-features li {
      position: relative;
      padding-left: 1.8rem;
      margin-bottom: 0.8rem;
      color: #4a5568;
      line-height: 1.5;
    }

    .service-features li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.6em;
      width: 10px;
      height: 2px;
      background-color: #7ec142;
    }

    .service-cta {
      color: hsl(var(--hue), 80%, 50%);
      border-color: hsl(var(--hue), 80%, 80%);
      font-weight: 500;
      padding: 0.6rem 1.5rem;
      border-radius: 50px;
      align-self: center;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .service-cta:hover {
      background: hsl(var(--hue), 80%, 96%);
      transform: translateY(-2px);
    }

    .service-cta mat-icon {
      font-size: 1.2rem;
      width: auto;
      height: auto;
      transition: transform 0.3s ease;
    }

    .service-cta:hover mat-icon {
      transform: translateX(4px);
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
      .services-grid {
        gap: 2rem;
      }
    }

    @media (max-width: 992px) {
      .services-section {
        padding: 6rem 1rem;
      }

      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        max-width: 600px;
        margin: 0 auto;
        gap: 1.5rem;
      }

      .service-card {
        padding: 2rem 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .services-section {
        padding: 5rem 1rem;
      }

      .section-header {
        margin-bottom: 3rem;
      }

      .card-icon-container {
        width: 80px;
        height: 80px;
        margin-bottom: 1.5rem;
      }
    }
  `]
})
export class ServicesComponent {
  servicios = [
    {
      nombre: 'Logística Internacional',
      icon: 'public',
      descripcion: 'Soluciones globales personalizadas para el movimiento eficiente de mercancías a través de fronteras.',
      features: [
        'Transporte marítimo y aéreo',
        'Despacho aduanal integral',
        'Seguimiento en tiempo real',
        'Cobertura en 50+ países'
      ],
      badge: 'Global',
      colorHue: '210' // Azul
    },
    {
      nombre: 'Trámites Aduaneros',
      icon: 'gavel',
      descripcion: 'Gestión experta de toda la documentación y regulaciones para operaciones internacionales.',
      features: [
        'Clasificación arancelaria',
        'Certificaciones y permisos',
        'Cumplimiento normativo',
        'Asesoría especializada'
      ],
      badge: 'Expertos',
      colorHue: '350' // Rojo
    },
    {
      nombre: 'Transporte Multimodal',
      icon: 'local_shipping',
      descripcion: 'Combinación inteligente de modos de transporte para optimizar costos y tiempos.',
      features: [
        'Soluciones terrestres',
        'Conexiones aéreas',
        'Enlaces marítimos',
        'Ruteo inteligente'
      ],
      badge: 'Flexible',
      colorHue: '160' // Verde
    },
    {
      nombre: 'Almacenamiento Inteligente',
      icon: 'warehouse',
      descripcion: 'Infraestructura tecnológica y estratégicamente ubicada para tu inventario.',
      features: [
        'Centros logísticos',
        'Control de inventario',
        'Cross-docking',
        'Distribución última milla'
      ],
      badge: 'Seguro',
      colorHue: '270' // Violeta
    }
  ];
}
