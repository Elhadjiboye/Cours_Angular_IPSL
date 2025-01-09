import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from "./frame/entete/entete.component";
import { MenuComponent } from "./frame/menu/menu.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { FooterComponent } from "./frame/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EnteteComponent, MenuComponent, AccueilComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cours_Angular_IPSL';
}
