import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <img src="assets/logo-white.png" alt="NAPEX LOGISTICS" class="footer-logo">
          <p class="footer-tagline">Soluciones logísticas integrales para tu cadena de suministro</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><mat-icon>facebook</mat-icon></a>
            <a href="#" aria-label="LinkedIn"><mat-icon>linkedin</mat-icon></a>
            <a href="#" aria-label="Instagram"><mat-icon>instagram</mat-icon></a>
          </div>
        </div>

        <div class="footer-contact">
          <h3>Contacto</h3>
          <div class="contact-item">
            <mat-icon>person</mat-icon>
            <span>Paulina Medina – Comercial</span>
          </div>
          <div class="contact-item">
            <mat-icon>phone</mat-icon>
            <span>+52 314 102 9592</span>
          </div>
          <div class="contact-item">
            <mat-icon>email</mat-icon>
            <span>contacto&#64;napexlogistics.com</span>
          </div>
          <div class="contact-item">
            <mat-icon>location_on</mat-icon>
            <span>Ciudad de México, México</span>
          </div>
        </div>

        <div class="footer-links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 NAPEX LOGISTICS. Todos los derechos reservados.</p>
        <div class="legal-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos de servicio</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #26386e 0%, #1a2a57 100%);
      color: white;
      padding: 3rem 1rem 0;
      font-size: 0.95rem;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding-bottom: 2rem;
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-logo {
      height: 40px;
      margin-bottom: 1rem;
      filter: brightness(0) invert(1);
    }

    .footer-tagline {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: white;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
    }

    .social-links a:hover {
      background: #7bc24a;
      transform: translateY(-3px);
    }

    .footer-contact h3, .footer-links h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.5rem;
    }

    .footer-contact h3::after, .footer-links h3::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: #7bc24a;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .contact-item mat-icon {
      color: #7bc24a;
      font-size: 1.2rem;
      width: auto;
      height: auto;
    }

    .footer-links ul {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.8rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
    }

    .footer-links a:hover {
      color: white;
      padding-left: 5px;
    }

    .footer-links a::before {
      content: '→';
      position: absolute;
      left: -15px;
      opacity: 0;
      transition: all 0.3s ease;
      color: #7bc24a;
    }

    .footer-links a:hover::before {
      opacity: 1;
      left: -10px;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .legal-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    .legal-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .legal-links a:hover {
      color: #7bc24a;
    }

    @media (max-width: 768px) {
      .footer-container {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .footer-brand {
        align-items: center;
        text-align: center;
      }

      .footer-contact h3::after,
      .footer-links h3::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  `]
})
export class FooterComponent {}
