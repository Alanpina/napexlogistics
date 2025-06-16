import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <footer class="footer" id="contact">
      <div class="footer-container">
        <div class="footer-brand">
          <img
            src="assets/logo.png"
            alt="NAPEX LOGISTICS"
            class="footer-logo"
          />
          <p class="footer-tagline">Gestión con perspectiva Logística</p>
          <div class="social-links">
            <a href="https://wa.me/+523141029592" target="_blank"
              ><i class="fa-brands fa-whatsapp"></i
            ></a>
            <a href="mailto:contacto@napexlogistics.com"
              ><i class="fa-solid fa-envelope"></i
            ></a>
          </div>
        </div>

        <div class="footer-contact">
          <h3>Contacto</h3>
          <div class="contact-item">
            <mat-icon>phone</mat-icon>
            <span>314 102 9592</span>
          </div>
          <div class="contact-item">
            <mat-icon>email</mat-icon>
            <span>contacto&#64;napexlogistics.com</span>
          </div>
          <div class="contact-item">
            <mat-icon>location_on</mat-icon>
            <span>Manzanillo, Colima, México</span>
          </div>
        </div>

        <div class="footer-links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a (click)="scroll('home')">Inicio</a></li>
            <li><a (click)="scroll('about')">Nosotros</a></li>
            <li><a (click)="scroll('services')">Servicios</a></li>
            <li><a (click)="scroll('why-us')">¿Por qué elegirnos?</a></li>
            <li><a (click)="scroll('contact')">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 NAPEX LOGISTICS. Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: linear-gradient(135deg, #325fae 0%, #1e3b6f 100%);
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
        background: #7ec142;
        transform: translateY(-3px);
      }

      .footer-contact h3,
      .footer-links h3 {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
      }

      .footer-contact h3::after,
      .footer-links h3::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 2px;
        background: #7ec142;
      }

      :host a:-webkit-any-link {
        text-decoration: none;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.9);
      }

      .contact-item mat-icon {
        color: #7ec142;
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
        cursor: pointer;
      }

      .footer-links a::before {
        content: '→';
        position: absolute;
        left: -15px;
        opacity: 0;
        transition: all 0.3s ease;
        color: #7ec142;
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
        color: #7ec142;
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
    `,
  ],
})
export class FooterComponent {
  scroll(id: string) {
    let el = document.getElementById(id) as HTMLElement;
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
