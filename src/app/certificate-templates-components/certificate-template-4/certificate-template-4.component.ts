import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CertificateDataService, CertificateData } from '../../certificate-data.service/certificate-data.service';

@Component({
  selector: 'certificate-template-4',
  standalone: true,
  imports: [],
  templateUrl: './certificate-template-4.component.html',
  styleUrl: './certificate-template-4.component.scss'
})
export class CertificateTemplate4Component {
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
