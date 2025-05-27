import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <section class="about-section">
      <div class="about-content">
        <div class="text-content">
          <h2 class="about-title">¿Quiénes Somos?</h2>
          <p class="about-description">
            NAPEX LOGISTICS es un gestor logístico comprometido en optimizar la cadena de suministro,
            garantizando la eficiencia, rentabilidad y satisfacción del cliente.
          </p>
          <!-- <button mat-raised-button color="primary" class="cta-button">Conoce nuestra historia</button> -->
        </div>

        <div class="image-grid">
          <div class="image-container main-image">
            <img src="assets/napex2.jpg" alt="Almacén logístico moderno" loading="lazy" />
            <div class="image-overlay"></div>
          </div>
          <div class="image-container secondary-image">
            <img src="assets/napex3.jpg" alt="Equipo de NAPEX LOGISTICS" loading="lazy" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 6rem 1rem;
      position: relative;
      overflow: hidden;
    }

    .about-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .text-content {
      padding: 2rem;
      position: relative;
      z-index: 2;
    }

    .about-title {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      color: #0d47a1;
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
    }

    .about-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #0d47a1, #1976d2);
    }

    .about-description {
      font-size: clamp(1rem, 1.2vw, 1.2rem);
      line-height: 1.8;
      color: #333;
      margin-bottom: 2rem;
    }

    .cta-button {
      padding: 0.8rem 2rem;
      font-weight: 500;
      border-radius: 50px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(13, 71, 161, 0.1);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(13, 71, 161, 0.2);
    }

    .image-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      height: 400px;
    }

    .image-container {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .image-container:hover {
      transform: translateY(-5px);
    }

    .main-image {
      grid-row: span 2;
    }

    .secondary-image {
      align-self: end;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      .about-content {
        grid-template-columns: 1fr;
      }

      .text-content {
        text-align: center;
      }

      .about-title::after {
        left: 50%;
        transform: translateX(-50%);
      }

      .image-grid {
        height: 300px;
        margin-top: 2rem;
      }
    }

    @media (max-width: 576px) {
      .about-section {
        padding: 4rem 1rem;
      }

      .image-grid {
        grid-template-columns: 1fr;
        height: auto;
      }

      .main-image {
        grid-row: span 1;
        height: 250px;
      }

      .secondary-image {
        height: 200px;
      }
    }
  `]
})
export class AboutComponent {}
