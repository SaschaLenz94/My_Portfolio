import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    NavbarComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService) {
    // Setzen der Standard-Sprache auf Englisch ('en')
    this.translate.setDefaultLang('en');

    // Explizit auf Englisch setzen, unabhängig von der Browsersprache
    this.translate.use('en');
  }  }