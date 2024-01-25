import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CertificateTemplate1Component } from '../certificate-templates-components/certificate-template-1/certificate-template-1.component';
import { CertificateTemplate2Component } from '../certificate-templates-components/certificate-template-2/certificate-template-2.component';
import { CertificateTemplate3Component } from '../certificate-templates-components/certificate-template-3/certificate-template-3.component';
import { CertificateTemplate4Component } from '../certificate-templates-components/certificate-template-4/certificate-template-4.component';
import { CertificateTemplate5Component } from '../certificate-templates-components/certificate-template-5/certificate-template-5.component';
import { CertificateTemplate6Component } from '../certificate-templates-components/certificate-template-6/certificate-template-6.component';
import { CertificateTemplateMoveService } from '../certificate-template-move.service/certificate-template-move.service';
import { CertificateDataService } from '../certificate-data.service/certificate-data.service';
import { AppFooterComponent } from '../app-fixed-footer/app-footer.component';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate-template-confirmation-page',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    CertificateTemplate1Component,
    CertificateTemplate2Component,
    CertificateTemplate3Component,
    CertificateTemplate4Component,
    CertificateTemplate5Component,
    CertificateTemplate6Component,
    AppFooterComponent
  ],
  templateUrl: './certificate-template-confirmation-page.component.html',
  styleUrl: './certificate-template-confirmation-page.component.scss'
})
export class CertificateTemplateConfirmationPageComponent {
  selectedTemplate = this.templateService.getTemplateId();
  navigationSubscription: Subscription | null = null;

  constructor(private templateService: CertificateTemplateMoveService, private router: Router,
    private certificateDataService: CertificateDataService) {}

  NavigateToFormationPage() {
    this.router.navigate(['/certificate-formation']);
  }

  ngOnInit() {
    this.certificateDataService.resetCertificateData();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
