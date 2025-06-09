import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <section class="why-section">
      <div class="background-pattern"></div>

      <div class="content-container">
        <div class="text-content">
          <h2 class="section-title">
            <span class="title-line">¿Por qué elegir </span>
            <span class="title-line accent">NAPEX LOGISTICS?</span>
          </h2>

          <p class="section-description">
            Ofrecemos servicios integrales para todo tipo de operaciones de importación y exportación,
            con distribución hasta el destino final. Nuestro conocimiento y procesos garantizan
            <span class="highlight">optimización de tiempos y costos</span> en cada operación.
          </p>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>Operaciones completas</h3>
              <p>Gestión integral desde origen hasta destino final</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>Expertos en comercio</h3>
              <p>Conocimiento especializado en importación/exportación</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>Optimización garantizada</h3>
              <p>Procesos diseñados para reducir tiempos y costos</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>Soporte personalizado</h3>
              <p>Acompañamiento en cada etapa de tu operación</p>
            </div>
          </div>
        </div>

        <div class="image-content">
          <img src="assets/napex4.jpg" alt="Equipo de NAPEX LOGISTICS" loading="lazy" class="team-image">
          <div class="image-overlay"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Base Styles */
    .why-section {
      position: relative;
      padding: 6rem 1rem;
      background: #f8fafc;
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
      opacity: 0.4;
      z-index: 0;
    }

    .content-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    /* Text Content */
    .text-content {
      padding: 1rem;
    }

    .section-title {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      margin-bottom: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: #1e3b6f;
    }

    .accent {
      color: #7ec142;
    }

    .section-description {
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      line-height: 1.8;
      color: #4a5568;
      margin-bottom: 3rem;
    }

    .highlight {
      color: #1e3b6f;
      font-weight: 600;
    }

    /* Features Grid */
    .features-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .feature-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
      border-left: 3px solid #7ec142;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }

    .feature-icon {
      width: 28px;
      height: 28px;
      background: #7ec142;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      font-weight: bold;
      font-size: 1rem;
    }

    .feature-card h3 {
      font-size: 1.1rem;
      color: #1e3b6f;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .feature-card p {
      font-size: 0.9rem;
      color: #64748b;
      line-height: 1.6;
    }

    /* Image Content */
    .image-content {
      position: relative;
      height: 500px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .team-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(38, 56, 110, 0.3), transparent);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .content-container {
        gap: 3rem;
      }

      .image-content {
        height: 450px;
      }
    }

    @media (max-width: 768px) {
      .content-container {
        grid-template-columns: 1fr;
      }

      .text-content {
        text-align: center;
        padding: 0;
      }

      .features-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0 auto 2rem;
      }

      .image-content {
        height: 400px;
        order: -1;
      }
    }

    @media (max-width: 480px) {
      .why-section {
        padding: 4rem 1rem;
      }

      .image-content {
        height: 300px;
      }
    }
  `]
})
export class WhyChooseUsComponent {}
