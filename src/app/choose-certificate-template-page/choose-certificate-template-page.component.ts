import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppNonFixedFooterComponent } from '../app-non-fixed-footer/app-non-fixed-footer.component';
import { CertificateTemplate1Component } from '../certificate-templates-components/certificate-template-1/certificate-template-1.component';
import { CertificateTemplate2Component } from '../certificate-templates-components/certificate-template-2/certificate-template-2.component';
import { CertificateTemplate3Component } from '../certificate-templates-components/certificate-template-3/certificate-template-3.component';
import { CertificateTemplate4Component } from '../certificate-templates-components/certificate-template-4/certificate-template-4.component';
import { CertificateTemplate5Component } from '../certificate-templates-components/certificate-template-5/certificate-template-5.component';
import { CertificateTemplate6Component } from '../certificate-templates-components/certificate-template-6/certificate-template-6.component';
import { CertificateTemplateMoveService } from '../certificate-template-move.service/certificate-template-move.service';
import { CertificateDataService } from '../certificate-data.service/certificate-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'choose-certificate-template-page',
  standalone: true,
  imports: [
    RouterLink,
    AppNonFixedFooterComponent,
    CertificateTemplate1Component,
    CertificateTemplate2Component,
    CertificateTemplate3Component,
    CertificateTemplate4Component,
    CertificateTemplate5Component,
    CertificateTemplate6Component
  ],
  templateUrl: './choose-certificate-template-page.component.html',
  styleUrl: './choose-certificate-template-page.component.scss'
})
export class ChooseCertificateTemplatePageComponent {

  constructor(private router: Router, private templateService: CertificateTemplateMoveService,
    private certificateDataService: CertificateDataService) {}

  selectTemplateAndNavigate(templateId: string) {
    this.templateService.setTemplateId(templateId);
    this.router.navigate(['/confirm-template']);
  }

  ngOnInit() {
    this.certificateDataService.resetCertificateData();
  }
}
