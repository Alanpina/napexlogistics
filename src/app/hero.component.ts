import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <section class="hero">
      <div class="hero-background">
        <img class="hero-bg" src="assets/napex1.jpg" alt="Puerto logístico" loading="lazy" />
        <div class="overlay-gradient"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Gestión Logística Integral</h1>
        <p class="hero-subtitle">
          Optimizamos tu cadena de suministro para lograr eficiencia, rentabilidad y satisfacción del cliente.
        </p>
        <button mat-raised-button color="accent" class="hero-cta" aria-label="Conoce nuestros servicios">
          Conoce nuestros servicios
        </button>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 100vh;
      max-height: 1200px;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
      isolation: isolate;
    }

    .hero-background {
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    .hero-bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      will-change: transform;
    }

    .overlay-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.3) 100%
      );
    }

    .hero-content {
      padding: 2rem;
      color: white;
      max-width: 1200px;
      margin: 0 auto;
      animation: fadeInUp 1s ease-out;
    }

    .hero-title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: clamp(1rem, 2vw, 1.5rem);
      line-height: 1.6;
      margin-bottom: 2.5rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .hero-cta {
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 500;
      border-radius: 50px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .hero-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .hero {
        min-height: 500px;
      }

      .hero-content {
        padding: 1.5rem;
      }

      .overlay-gradient {
        background: rgba(0, 0, 0, 0.6);
      }
    }
  `]
})
export class HeroComponent {}
