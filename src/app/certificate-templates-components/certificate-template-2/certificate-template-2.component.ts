import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CertificateDataService, CertificateData } from '../../certificate-data.service/certificate-data.service';

@Component({
  selector: 'certificate-template-2',
  standalone: true,
  imports: [],
  templateUrl: './certificate-template-2.component.html',
  styleUrl: './certificate-template-2.component.scss'
})
export class CertificateTemplate2Component {
  certificateData: CertificateData = {
    fullName: '',
    companyName: '',
    creationDate: '',
    courseName: '',
    certificateId: ''
  };
  private dataSubscription: Subscription | null = null;

  constructor(private certificateDataService: CertificateDataService) {}

  ngOnInit() {
    this.dataSubscription = this.certificateDataService.getCertificateData().subscribe(data => {
      this.certificateData = data;
    });
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
