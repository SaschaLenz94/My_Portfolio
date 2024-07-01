import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './shared/component/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './shared/component/imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'imprint', component: ImprintComponent },
];
