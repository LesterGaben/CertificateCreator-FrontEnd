import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ChooseCertificateTemplatePageComponent } from './choose-certificate-template-page/choose-certificate-template-page.component';
import { CertificateTemplateConfirmationPageComponent } from './certificate-template-confirmation-page/certificate-template-confirmation-page.component';
import { CertificateFormationPageComponent } from './certificate-formation-page/certificate-formation-page.component';
import { DownloadCreatedCertificateComponent } from './download-created-certificate/download-created-certificate.component';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';

export const appRoutes: Routes = [
    {path: '', component: HomePageComponent, pathMatch: 'full'},
    {path: 'choose-template', component: ChooseCertificateTemplatePageComponent, pathMatch: 'full'},
    {path: 'confirm-template', component: CertificateTemplateConfirmationPageComponent, pathMatch: 'full'},
    {path: 'certificate-formation', component: CertificateFormationPageComponent, pathMatch: 'full'},
    {path: 'certificates/:id', component: DownloadCreatedCertificateComponent },
    {path: 'verify-certificate', component: VerifyCertificateComponent, pathMatch: 'full'}
];
