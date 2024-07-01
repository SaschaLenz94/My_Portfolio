import { Component, inject } from '@angular/core';
import { NavbarserviceService } from '../navbarservice.service';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { Project01Component } from '../project01/project01.component';
import { ContactComponent } from '../contact/contact.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { SayHiSectionComponent } from '../say-hi-section/say-hi-section.component';
import { Project02Component } from '../project02/project02.component';
import { ArrowLeftComponent } from '../shared/component/arrow-left/arrow-left.component';
import { ArrowRightComponent } from '../shared/component/arrow-right/arrow-right.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    NavbarComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    Project01Component,
    Project02Component,
    ContactComponent,
    HeaderComponent,

    SayHiSectionComponent,
    ArrowLeftComponent,
    ArrowRightComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  navbarservice = inject(NavbarserviceService);
}
