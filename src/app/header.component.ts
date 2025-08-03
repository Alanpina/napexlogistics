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
            (click)="scroll('home')"
            routerLinkActive="active"
          >
            <span>Inicio</span>
          </a>
          <a
            mat-button
            class="nav-link"
            (click)="scroll('about')"
            routerLinkActive="active"
          >
            <span>Nosotros</span>
          </a>

          <a
            mat-button
            class="nav-link"
            (click)="scroll('services')"
            routerLinkActive="active"
          >
            <span>Servicios</span>
          </a>
          <a
            mat-button
            class="nav-link"
            (click)="scroll('why-us')"
            routerLinkActive="active"
          >
            <span>¿Por qué elegirnos?</span>
          </a>
        </nav>

        <div class="actions-container">
          <button
            mat-button
            class="contact-button"
            (click)="scroll('contact')"
          >
            <mat-icon style="color: white;">email</mat-icon>
            <span>Contacto</span>
          </button>
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
            (click)="scroll('home')"
            (click)="mobileMenuOpen = false"
          >
            <span>Inicio</span>
          </a>
          <a
            mat-button
            class="mobile-link"
            (click)="scroll('about')"
            (click)="mobileMenuOpen = false"
          >
            <span>Nosotros</span>
          </a>
          <a
            mat-button
            class="mobile-link"
            (click)="scroll('services')"
            (click)="mobileMenuOpen = false"
          >
            <span>Servicios</span>
          </a>
          <a
            mat-button
            class="mobile-link"
            (click)="scroll('why-us')"
            (click)="mobileMenuOpen = false"
          >
            <span>¿Por qué elegirnos?</span>
          </a>
          <a
            mat-button
            class="mobile-link contact-link"
            (click)="scroll('contact')"
            (click)="mobileMenuOpen = false"
          >
            <span>Contacto</span>
          </a>
        </div>
      </ng-container>
    </mat-toolbar>
  `,
  styles: [
    `
      .toolbar {
        background: linear-gradient(135deg, #f5f5f5 0%, #f5f5f5 100%);
        color: white;
        padding: 0 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.35);
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
        border-radius: 6px;
        margin-right: 16px;
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
        color: #1e3b6f !important;
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
        background: #1e3b6f;
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
        background: #7ec142;
        border-radius: 30px;
        padding: 0.5rem 1.5rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
      }

      .contact-button:hover {
        background: #7ec142;
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
        background: linear-gradient(135deg, #f5f5f5 0%, #f5f5f5 100%);
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

    .mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
    --mdc-text-button-label-text-color: #1e3b6f;
    --mdc-outlined-button-label-text-color: #1e3b6f;
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

      mat-icon {
        color: #1e3b6f;
      }
      button[mat-button] {
        font-weight: 500;
        color: white;
      }
    `,
  ],
})
export class HeaderComponent {
  scroll(id: string) {
    let el = document.getElementById(id) as HTMLElement;
    el.scrollIntoView({ behavior: 'smooth' });
  }
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
