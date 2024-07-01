import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { ContactComponent } from '../../../contact/contact.component';
import { SayHiSectionComponent } from '../../../say-hi-section/say-hi-section.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, ContactComponent,SayHiSectionComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
