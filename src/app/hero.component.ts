import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <section class="hero" id="home">
      <div class="hero-background">
        <img class="hero-bg" src="assets/napex1.png" alt="Puerto logístico" loading="lazy" />
        <div class="overlay-gradient"></div>
      </div>

      <div class="hero-content">
        <div class="content-wrapper">
          <h1 class="hero-title">
            <span class="title-line">Gestión con perspectiva</span>
            <span class="title-line">Logística</span>
          </h1>

          <p class="hero-subtitle">
            Optimizamos la cadena de suministro, para asegurar la satisfacción del cliente y la eficiencia operativa
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Base Styles */
    .hero {
      position: relative;
      height: 100vh;
      max-height: 1200px;
      min-height: 650px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      isolation: isolate;
    }

    /* Background Styles */
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
      animation: zoomEffect 20s infinite alternate;
    }

    .overlay-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(38, 56, 110, 0.85) 0%,
        rgba(38, 56, 110, 0.6) 100%
      );
    }

    /* Content Styles */
    .hero-content {
      width: 100%;
      padding: 2rem;
      color: white;
      text-align: center;
      animation: fadeInUp 1s ease-out;
    }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
      letter-spacing: -0.5px;
    }

    .title-line {
      display: block;
    }

    .accent {
      color: #7bc24a;
    }

    .hero-subtitle {
      font-size: clamp(1.1rem, 2.2vw, 1.6rem);
      line-height: 1.7;
      margin-bottom: 2.5rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 300;
    }

    .highlight {
      font-weight: 600;
      color: white;
    }

    /* Button Styles */
    .cta-container {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero-cta {
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 500;
      border-radius: 50px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      min-width: 220px;
    }

    .primary {
      background-color: white;
      color: #325fae;
      box-shadow: 0 4px 15px rgba(123, 194, 74, 0.3);
    }

    .primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 25px rgba(123, 194, 74, 0.4);
      background-color: #6aad3f !important;
      color: white !important
    }

    .secondary, .mat-mdc-outlined-button:not(:disabled) {
      border-color: white;
      color: white;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
    }

    .secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }

    .arrow {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }

    .primary:hover .arrow {
      transform: translateX(4px);
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.8rem;
      opacity: 0.8;
      animation: bounce 2s infinite;
    }

    .mouse {
      width: 24px;
      height: 40px;
      border: 2px solid white;
      border-radius: 12px;
      margin-top: 8px;
      position: relative;
    }

    .wheel {
      width: 4px;
      height: 8px;
      background: white;
      border-radius: 2px;
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      animation: scrollWheel 2s infinite;
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes zoomEffect {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.05);
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
      }
      40% {
        transform: translateY(-10px) translateX(-50%);
      }
      60% {
        transform: translateY(-5px) translateX(-50%);
      }
    }

    @keyframes scrollWheel {
      0% {
        opacity: 1;
        top: 6px;
      }
      100% {
        opacity: 0;
        top: 18px;
      }
    }

    /* Responsive Adjustments */
    @media (max-width: 992px) {
      .hero-title {
        font-size: clamp(2rem, 7vw, 3.5rem);
      }

      .hero-subtitle {
        font-size: clamp(1rem, 2.5vw, 1.4rem);
      }

      .hero-cta {
        padding: 0.8rem 1.8rem;
        min-width: 180px;
      }
    }

    @media (max-width: 768px) {
      .hero {
        min-height: 600px;
      }

      .hero-content {
        padding: 1.5rem;
      }

      .cta-container {
        flex-direction: column;
        gap: 1rem;
      }

      .hero-cta {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
      }

      .overlay-gradient {
        background: linear-gradient(
          135deg,
          rgba(38, 56, 110, 0.9) 0%,
          rgba(38, 56, 110, 0.7) 100%
        );
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        flex-direction: column;
      }

      .scroll-indicator {
        display: none;
      }
    }
  `]
})
export class HeroComponent {}
