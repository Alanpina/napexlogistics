import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <section class="why-section">
      <div class="background-image"></div>

      <div class="content-container">
        <div class="text-content">
          <h2 class="section-title">¿Por qué elegir <span>NAPEX LOGISTICS</span>?</h2>
          <p class="section-description">
            Nuestra experiencia y la seguridad con la que manejamos cada operación nos distingue,
            brindando tranquilidad y resultados excepcionales a nuestros clientes.
          </p>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>+15 años de experiencia</h3>
              <p>Expertos en logística internacional y comercio exterior</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>Tecnología avanzada</h3>
              <p>Sistemas de seguimiento en tiempo real para tu mercancía</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>Equipo especializado</h3>
              <p>Profesionales certificados en operaciones logísticas</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <h3>Cobertura global</h3>
              <p>Red de partners en los principales puertos y aeropuertos</p>
            </div>
          </div>

          <!-- <button mat-raised-button class="cta-button">Conoce nuestra historia</button> -->
        </div>

        <div class="image-content">
          <img src="assets/napex4.jpg" alt="Equipo de NAPEX LOGISTICS" loading="lazy" class="team-image">
          <div class="image-overlay"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-section {
      position: relative;
      padding: 5rem 1rem;
      overflow: hidden;
      color: #26386e;
    }

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(123, 194, 74, 0.1) 0%, rgba(38, 56, 110, 0.1) 100%);
      z-index: -1;
    }

    .content-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .text-content {
      padding: 2rem;
    }

    .section-title {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      margin-bottom: 1.5rem;
      font-weight: 700;
      line-height: 1.3;
    }

    .section-title span {
      color: #7bc24a;
    }

    .section-description {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 3rem;
      color: #4a5568;
    }

    .features-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .feature-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      border-left: 3px solid #7bc24a;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(38, 56, 110, 0.1);
    }

    .feature-icon {
      width: 30px;
      height: 30px;
      background: #7bc24a;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .feature-card h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #26386e;
    }

    .feature-card p {
      font-size: 0.9rem;
      color: #4a5568;
      line-height: 1.6;
    }

    .cta-button {
      background-color: #26386e;
      color: white;
      padding: 0.8rem 2rem;
      font-weight: 500;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background-color: #1e2d56;
      transform: translateY(-2px);
    }

    .image-content {
      position: relative;
      height: 500px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
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
      background: linear-gradient(to top, rgba(38, 56, 110, 0.3), rgba(123, 194, 74, 0.1));
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      .content-container {
        grid-template-columns: 1fr;
      }

      .image-content {
        height: 400px;
        order: -1;
      }

      .text-content {
        padding: 1rem;
      }
    }

    @media (max-width: 576px) {
      .features-grid {
        grid-template-columns: 1fr;
      }

      .why-section {
        padding: 3rem 1rem;
      }
    }
  `]
})
export class WhyChooseUsComponent {}
