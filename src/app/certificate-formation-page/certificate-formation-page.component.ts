import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CertificateTemplate1Component } from '../certificate-templates-components/certificate-template-1/certificate-template-1.component';
import { CertificateTemplate2Component } from '../certificate-templates-components/certificate-template-2/certificate-template-2.component';
import { CertificateTemplate3Component } from '../certificate-templates-components/certificate-template-3/certificate-template-3.component';
import { CertificateTemplate4Component } from '../certificate-templates-components/certificate-template-4/certificate-template-4.component';
import { CertificateTemplate5Component } from '../certificate-templates-components/certificate-template-5/certificate-template-5.component';
import { CertificateTemplateMoveService } from '../certificate-template-move.service/certificate-template-move.service';
import { CertificateDataService, CertificateData } from '../certificate-data.service/certificate-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

interface ValidationErrors {
  [key: string]: boolean;
  fullName: boolean;
  companyName: boolean;
  creationDate: boolean;
  courseName: boolean;
  fieldsAreEmpty: boolean;
}

@Component({
  selector: 'app-certificate-formation-page',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    CertificateTemplate1Component,
    CertificateTemplate2Component,
    CertificateTemplate3Component,
    CertificateTemplate4Component,
    CertificateTemplate5Component,
    HttpClientModule
  ],
  templateUrl: './certificate-formation-page.component.html',
  styleUrl: './certificate-formation-page.component.scss'
})
export class CertificateFormationPageComponent {

  certificateData: CertificateData = {
    fullName: '',
    companyName: '',
    creationDate: '',
    courseName: ''
  };

  validationErrors : ValidationErrors = {
    fullName: false,
    companyName: false,
    creationDate: false,
    courseName: false,
    fieldsAreEmpty: false
  };

  validateMaxLimits = {
    fullName: 37,
    companyName: 36,
    courseName: 50
  }

  dataIsSupmited: boolean = false;

  selectedTemplate = this.templateService.getTemplateId();
  
  constructor(private templateService: CertificateTemplateMoveService, private certificateDataService: CertificateDataService,
    private el: ElementRef, private http: HttpClient, private router: Router) {}

  submitData(field: string) {
    if (field === 'creationDate' && this.certificateData.creationDate.length > 0) {
      this.validationErrors.creationDate = !this.isValidDate(this.certificateData.creationDate);
    }
    this.validateData(field);
    if(!this.validationErrors[field]) {
      this.certificateDataService.setCertificateField(field, this.certificateData[field]);
    }
  }

  validateData(field: string) {

    if(this.templateService.getTempleIdFromStorage() == 'template-4') {
      this.validateMaxLimits.courseName = 40;
    }
    else {
      this.validateMaxLimits.courseName = 50;
    }

    switch(field) {
      case 'fullName':
        this.validationErrors.fullName = this.certificateData.fullName.length > this.validateMaxLimits.fullName;
        break;
      case 'companyName':
        this.validationErrors.companyName = this.certificateData.companyName.length > this.validateMaxLimits.companyName;
        break;
      case 'courseName':
        this.validationErrors.courseName = this.certificateData.courseName.length > this.validateMaxLimits.courseName;
        break;
    }
  }

  isValidDate(dateString: string): boolean {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(dateString)) return false;
  
    const [day, month, year] = dateString.split('.').map(Number);
    const date = new Date(year, month - 1, day);
  
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  }

  clearField(field: string) {
    this.validationErrors[field] = false;
    this.certificateData[field] = '';
    this.submitData(field);
    this.dataIsSupmited = false;
  }

  clearAllFields() {
    let fieldKeys = ['fullName', 'companyName', 'creationDate', 'courseName'];
    for (let index = 0; index < fieldKeys.length; index++) {
      this.validationErrors[fieldKeys[index]] = false;
      this.certificateData[fieldKeys[index]] = '';
      this.submitData(fieldKeys[index]);
    }
    this.dataIsSupmited = false;
  }

  submitAllFields() {
    let fieldKeys = ['fullName', 'companyName', 'creationDate', 'courseName'];
    for (let index = 0; index < fieldKeys.length; index++) {
      this.submitData(fieldKeys[index]);
    }
    this.dataIsSupmited = true;
  }

  ngOnInit() {
    this.submitDataToInputFields();
  }

  submitDataToInputFields() {
    let certificateDatatemp = this.certificateDataService.getCertificateDataFromStorage();
    this.certificateData.companyName = certificateDatatemp.companyName;
    this.certificateData.courseName = certificateDatatemp.courseName;
    this.certificateData.fullName = certificateDatatemp.fullName;
    this.certificateData.creationDate = certificateDatatemp.creationDate;
    this.checkThatFieldsAreNotEmpty();
  }

  checkThatFieldsAreNotEmpty() {
    let fieldKeys = ['fullName', 'companyName', 'creationDate', 'courseName'];
    for (let index = 0; index < fieldKeys.length; index++) {
      if(this.certificateData[fieldKeys[index]].length <= 0) {
        this.validationErrors.fieldsAreEmpty = true;
        this.dataIsSupmited = false;
        break;
      }
      else {
        this.validationErrors.fieldsAreEmpty = false;
        this.dataIsSupmited = true;
      }
    }
  }

  generateCertificate() {
    this.checkThatFieldsAreNotEmpty();
    if(this.validationErrors.fieldsAreEmpty || !this.dataIsSupmited) {
      alert("Not all fields of the form are filled in. Please fill them");
      return;
    }
    let certificateTemplate : string = 'certificate-' + this.templateService.getTempleIdFromStorage();
    let element = this.el.nativeElement.querySelector(certificateTemplate);
    let certificateHTML: string = element.innerHTML;

    const postData = { pdfCertificate: certificateHTML };

    
    console.log('Sending JSON:', JSON.stringify(postData));

    const postUrl = 'https://localhost:7110/certificates';
    this.http.post<any>(postUrl, postData)
      .subscribe(
        (response) => {
            const certificateId = response && response.certificateId; 
            if (certificateId) {
                const redirectToUrl = `/certificates/${encodeURIComponent(certificateId)}`;
                this.router.navigateByUrl(redirectToUrl);
            } else {
                console.error('Помилка: не вдалося отримати айді сертифіката з відповіді:', response);
            }
        },
        error => {
            console.error('Помилка при створенні PDF', error);
        }
      );
      
  }
}
