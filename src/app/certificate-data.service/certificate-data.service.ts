import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CertificateData {
  [key: string]: string;
  fullName: string;
  companyName: string;
  creationDate: string;
  courseName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CertificateDataService {
  private certificateDataSource = new BehaviorSubject<CertificateData>(this.getCertificateDataFromStorage());
  
  setCertificateField(key: string, value: string) {
    const currentData = this.getCertificateDataFromStorage();
    const updatedData = { ...currentData, [key]: value };
    localStorage.setItem('certificateData', JSON.stringify(updatedData));
    this.certificateDataSource.next(updatedData);
  }

  getCertificateDataFromStorage(): CertificateData {
    const data = localStorage.getItem('certificateData');
    return data ? JSON.parse(data) : { fullName: '', companyName: '', creationDate: '', courseName: '', certificateId: '' };
  }

  getCertificateData() {
    return this.certificateDataSource.asObservable();
  }

  resetCertificateData() {
    localStorage.removeItem('certificateData');
    this.certificateDataSource.next({ fullName: '', companyName: '', creationDate: '', courseName: '', certificateId: '' });
  }
  
}
