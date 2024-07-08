import { Component } from '@angular/core';
import { SayHiSectionComponent } from '../../../say-hi-section/say-hi-section.component';
import { ContactComponent } from '../../../contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
