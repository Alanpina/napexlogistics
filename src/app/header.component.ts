import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
  template: `
    <mat-toolbar class="toolbar">
      <div class="logo-container">
        <img src="assets/logo.png" alt="Logo Napex" class="logo" />
      </div>

      <span class="spacer"></span>

      <nav class="nav-links">
        <button mat-button class="nav-link" routerLink="/">Inicio</button>
        <button mat-button class="nav-link" routerLink="/about">
          ¿Quiénes somos?
        </button>
        <button mat-button class="nav-link" routerLink="/why-us">
          ¿Por qué elegirnos?
        </button>
        <button mat-button class="nav-link" routerLink="/contact">
          Contacto
        </button>
      </nav>

      <div class="language-selector">
        <button
          mat-icon-button
          [matMenuTriggerFor]="menu"
          aria-label="Seleccionar idioma"
        >
          <mat-icon>translate</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item>
            <span class="menu-item-content">
              <span class="flag-icon">🇪🇸</span> Español
            </span>
          </button>
          <button mat-menu-item>
            <span class="menu-item-content">
              <span class="flag-icon">🇺🇸</span> English
            </span>
          </button>
        </mat-menu>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .toolbar {
        background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%);
        color: white;
        padding: 0 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
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

      .spacer {
        flex: 1 1 auto;
      }

      .nav-links {
        display: flex;
        gap: 0.5rem;
        margin: 0 1rem;
      }

      .nav-link {
        font-weight: 500;
        letter-spacing: 0.5px;
        position: relative;
        transition: all 0.3s ease;
        color: white;
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

      .nav-link:hover::after,
      .nav-link:focus::after {
        width: 100%;
      }

      .language-selector {
        margin-left: 1rem;
      }

      .menu-item-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .flag-icon {
        font-size: 1.2rem;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .toolbar {
          padding: 0 1rem;
        }

        .nav-links {
          display: none; /* Menú hamburguesa sería ideal aquí */
        }

        .logo-container {
          margin-right: 8px;
          padding: 4px 0;
        }

        .logo {
          height: 40px;
          background-color: rgba(255, 255, 255, 0.85);
          padding: 4px 8px;
          border-radius: 4px;
        }

      }
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
export class HeaderComponent {}

// .logo {
//         height: 40px;
//         background-color: rgba(255, 255, 255, 0.85);
//         padding: 4px 8px;
//         border-radius: 4px;
//       }
//       .spacer {
//         flex: 1 1 auto;
//       }
//       mat-toolbar {
//         background: linear-gradient(to right, #0d47a1, #1976d2);
//         color: white;
//       }

