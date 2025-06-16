import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <section class="about-section">
      <div class="background-pattern"></div>

      <div class="about-container">
        <div class="content-wrapper">
          <div class="text-content">
            <h2 class="section-title">
              <span class="title-line">Nosotros</span>
              <span class="title-decorator"></span>
            </h2>

            <p class="section-description">
              <strong class="highlight">NAPEX LOGISTICS</strong> es un gestor
              logístico comprometido en optimizar la cadena de suministro,
              garantizando la eficiencia, rentabilidad y satisfacción del
              cliente.
            </p>
          </div>

          <div class="media-content">
            <div class="main-image">
              <img
                src="assets/napex2.jpg"
                alt="Instalaciones de NAPEX LOGISTICS"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      /* Base Styles */
      .about-section {
        position: relative;
        padding: 8rem 1rem;
        overflow: hidden;
        background-color: #f8fafc;
      }

      .background-pattern {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(
          rgba(38, 56, 110, 0.1) 1px,
          transparent 1px
        );
        background-size: 30px 30px;
        opacity: 0.6;
        z-index: 0;
      }

      .about-container {
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }

      .content-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      /* Text Content Styles */
      .text-content {
        padding: 2rem;
      }

      .section-title {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 2rem;
        color: #1e3b6f;
        position: relative;
      }

      .title-decorator {
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #7ec142, #1e3b6f);
        margin-top: 1rem;
        border-radius: 2px;
      }

      .section-description {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        line-height: 1.8;
        color: #4a5568;
        margin-bottom: 2.5rem;
      }

      .highlight {
        color: #7ec142;
        font-weight: 600;
      }

      /* Feature List */
      .feature-list {
        list-style: none;
        padding: 0;
        margin: 2rem 0 3rem;
      }

      .feature-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.2rem;
        font-size: 1.1rem;
        color: #2d3748;
      }

      .feature-icon {
        color: #7ec142;
        font-size: 1.4rem;
      }

      /* CTA Button */
      .cta-button {
        background-color: #1e3b6f;
        color: white;
        padding: 1rem 2.5rem;
        font-size: 1.1rem;
        font-weight: 500;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        box-shadow: 0 4px 6px rgba(38, 56, 110, 0.1);
      }

      .cta-button:hover {
        background-color: #1e2d56;
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(38, 56, 110, 0.2);
      }

      .cta-button mat-icon {
        transition: transform 0.3s ease;
      }

      .cta-button:hover mat-icon {
        transform: translateX(5px);
      }

      /* Media Content */
      .media-content {
        display: grid;
        grid-template-rows: auto auto;
        gap: 1.5rem;
        height: 100%;
      }

      .main-image {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        height: 600px;
      }

      .main-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .main-image:hover img {
        transform: scale(1.03);
      }

      .image-badge {
        position: absolute;
        bottom: 20px;
        left: 20px;
        background: rgba(255, 255, 255, 0.9);
        padding: 0.8rem 1.2rem;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        color: #1e3b6f;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .image-badge mat-icon {
        color: #7ec142;
      }

      .secondary-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }

      .stats-card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(0, 0, 0, 0.03);
      }

      .stat-item {
        margin-bottom: 1rem;
      }

      .stat-item:last-child {
        margin-bottom: 0;
      }

      .stat-number {
        font-size: 2rem;
        font-weight: 700;
        color: #7ec142;
        display: block;
        line-height: 1;
      }

      .stat-label {
        font-size: 0.9rem;
        color: #4a5568;
      }

      .team-image {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        height: 100%;
      }

      .team-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .image-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        padding: 1.5rem 1rem 1rem;
        color: white;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
      }

      /* Responsive Design */
      @media (max-width: 1200px) {
        .content-wrapper {
          gap: 3rem;
        }

        .main-image {
          height: 350px;
        }
      }

      @media (max-width: 992px) {
        .content-wrapper {
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .text-content {
          text-align: center;
          padding: 0;
        }

        .title-decorator {
          margin: 1rem auto 0;
        }

        .feature-list {
          max-width: 500px;
          margin: 2rem auto 3rem;
        }

        .cta-button {
          margin: 0 auto;
        }

        .media-content {
          max-width: 800px;
          margin: 0 auto;
        }
      }

      @media (max-width: 768px) {
        .about-section {
          padding: 6rem 1rem;
        }

        .secondary-content {
          grid-template-columns: 1fr;
        }

        .stats-card {
          flex-direction: row;
          gap: 2rem;
          justify-content: center;
        }

        .stat-item {
          margin-bottom: 0;
          text-align: center;
        }
      }

      @media (max-width: 576px) {
        .about-section {
          padding: 4rem 1rem;
        }

        .main-image {
          height: 280px;
        }

        .image-badge {
          bottom: 15px;
          left: 15px;
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
        }

        .stats-card {
          flex-direction: column;
          gap: 1rem;
        }
      }
    `,
  ],
})
export class AboutComponent {}
