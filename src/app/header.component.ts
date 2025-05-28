import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
  ],
  template: `
    <mat-toolbar class="toolbar">
      <div class="header-container">
        <!-- Logo -->
        <a href="/" class="logo-link">
          <div class="logo-container">
            <img src="assets/logo.png" alt="NAPEX LOGISTICS" class="logo" />
          </div>
        </a>

        <!-- Menú principal - Desktop -->
        <nav class="nav-links">
          <a
            mat-button
            class="nav-link"
            routerLink="/"
            routerLinkActive="active"
          >
            <span>Inicio</span>
          </a>
          <a
            mat-button
            class="nav-link"
            routerLink="/about"
            routerLinkActive="active"
          >
            <span>¿Quiénes somos?</span>
          </a>

          <a
            mat-button
            class="nav-link"
            routerLink="/services"
            routerLinkActive="active"
          >
            <span>Servicios</span>
          </a>
          <a
            mat-button
            class="nav-link"
            routerLink="/why-us"
            routerLinkActive="active"
          >
            <span>¿Por qué elegirnos?</span>
          </a>
        </nav>

        <!-- Menú de idioma -->
        <div class="actions-container">
          <button mat-button class="contact-button" routerLink="/contact">
            <mat-icon>email</mat-icon>
            <span>Contacto</span>
          </button>

          <div class="language-selector">
            <button
              mat-icon-button
              [matMenuTriggerFor]="menu"
              aria-label="Seleccionar idioma"
            >
              <mat-icon>language</mat-icon>
            </button>
            <mat-menu #menu="matMenu" class="language-menu">
              <button mat-menu-item>
                <span class="menu-item-content">
                  <span class="flag-icon">🇪🇸</span>
                  <span>Español</span>
                </span>
              </button>
              <button mat-menu-item>
                <span class="menu-item-content">
                  <span class="flag-icon">🇺🇸</span>
                  <span>English</span>
                </span>
              </button>
            </mat-menu>
          </div>
        </div>

        <!-- Menú Hamburguesa - Mobile -->
        <button
          mat-icon-button
          class="menu-button"
          (click)="toggleMobileMenu()"
          aria-label="Menú"
        >
          <mat-icon>menu</mat-icon>
        </button>
      </div>

      <!-- Menú Mobile -->

      <ng-container *ngIf="mobileMenuOpen">
        <div class="mobile-menu" [class.active]="mobileMenuOpen">
          <a
            mat-button
            class="mobile-link"
            routerLink="/"
            (click)="mobileMenuOpen = false"
          >
            <span>Inicio</span>
          </a>
          <a
            mat-button
            class="mobile-link"
            routerLink="/about"
            (click)="mobileMenuOpen = false"
          >
            <span>¿Quiénes somos?</span>
          </a>
          <a
            mat-button
            class="mobile-link"
            routerLink="/why-us"
            (click)="mobileMenuOpen = false"
          >
            <span>¿Por qué elegirnos?</span>
          </a>
          <a
            mat-button
            class="mobile-link"
            routerLink="/contact"
            (click)="mobileMenuOpen = false"
          >
            <span>Contacto</span>
          </a>

          <div class="mobile-language-selector">
            <button mat-button (click)="changeLanguage('es')">
              <span class="flag-icon">🇪🇸</span> Español
            </button>
            <button mat-button (click)="changeLanguage('en')">
              <span class="flag-icon">🇺🇸</span> English
            </button>
          </div>
        </div>
      </ng-container>
    </mat-toolbar>
  `,
  styles: [
    `
      .toolbar {
        background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%);
        color: white;
        padding: 0 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
        height: 80px;
      }

      .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        height: 100%;
      }

      .logo-container {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 8px 0;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 6px;
        margin-right: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .logo-container:hover {
        background-color: white;
        transform: scale(1.02);
      }

      .logo {
        height: 40px;
        padding: 4px 8px;
        object-fit: contain;
      }

      /* Navigation Styles */
      .nav-links {
        display: flex;
        gap: 1px;
        margin: 0 2rem;
      }

      .nav-link {
        color: white !important;
        font-weight: 500;
        letter-spacing: 0.5px;
        position: relative;
        transition: all 0.3s ease;
        border-radius: 0;
        height: 80px;
        display: flex;
        align-items: center;
        padding: 0 1.5rem;
      }

      .nav-link span {
        position: relative;
        z-index: 1;
      }

      .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background: #7bc24a;
        transition: height 0.3s ease;
        z-index: 0;
      }

      .nav-link:hover::before,
      .nav-link.active::before {
        height: 4px;
      }

      .nav-link:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: white;
        transition: width 0.3s ease;
      }

      .nav-link.active {
        font-weight: 600;
      }

      .nav-link:hover::after,
      .nav-link:focus::after {
        width: 100%;
      }

      /* Actions Container */
      .actions-container {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .contact-button {
        color: white;
        background: rgba(123, 194, 74, 0.2);
        border-radius: 30px;
        padding: 0.5rem 1.5rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
      }

      .contact-button:hover {
        background: #7bc24a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(123, 194, 74, 0.3);
      }

      .language-selector button {
        color: white;
        transition: all 0.3s ease;
      }

      .language-selector button:hover {
        transform: scale(1.1);
      }

      .language-menu {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .menu-item-content {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.95rem;
      }

      .flag-icon {
        font-size: 1.2rem;
      }

      /* Mobile Menu Button */
      .menu-button {
        display: none;
        color: white;
      }

      /* Mobile Menu */
      .mobile-menu {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background: #26386e;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.4s ease;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        // z-index: 1000;
      }

      .mobile-menu.active {
        transform: translateY(0);
        opacity: 1;
      }

      .mobile-link {
        color: white;
        text-align: left;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        width: 100%;
        font-weight: 500;
      }

      .mobile-language-selector {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
      }

      .mobile-language-selector button {
        color: white;
        text-align: left;
        padding: 0.5rem 0;
      }

      /* Responsive Styles */
      @media (max-width: 1024px) {
        .header-container {
          padding: 0 1.5rem;
        }

        .nav-links {
          margin: 0 1rem;
          gap: 0;
        }

        .nav-link {
          padding: 0 1rem;
        }
      }

      @media (max-width: 900px) {
        .nav-links,
        .actions-container {
          display: none;
        }

        .menu-button {
          display: block;
        }

        .header-container {
          justify-content: space-between;
        }
      }

      @media (max-width: 480px) {
        .header-container {
          padding: 0 1rem;
        }

        .company-name {
          display: none;
        }

        .logo {
          height: 35px;
        }
      }

      // /* Responsive adjustments */
      // @media (max-width: 768px) {
      //   .toolbar {
      //     padding: 0 1rem;
      //   }

      //   .nav-links {
      //     display: none; /* Menú hamburguesa sería ideal aquí */
      //   }

      //   .logo-container {
      //     display: flex;
      //     align-items: center;
      //     gap: 12px;
      //     transition: transform 0.3s ease;
      //   }

      //   .logo-container:hover {
      //     transform: scale(1.03);
      //   }

      //   .logo {
      //     height: 40px;
      //     background-color: rgba(255, 255, 255, 0.85);
      //     padding: 4px 8px;
      //     border-radius: 4px;
      //     width: auto;
      //   }
      // }
      mat-icon {
        color: white;
      }
      button[mat-button] {
        font-weight: 500;
        color: white;
      }
    `,
  ],
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  changeLanguage(lang: string) {
    // Implementar cambio de idioma
    this.mobileMenuOpen = false;
  }
}
