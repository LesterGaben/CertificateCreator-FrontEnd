import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateTemplateMoveService {
  private templateIdSource = new BehaviorSubject<string | null>(this.getTempleIdFromStorage());

  setTemplateId(id: string) {
    localStorage.setItem('templateId', id);
    this.templateIdSource.next(id);
  }

  getTemplateId() {
    return this.templateIdSource.asObservable();
  }

  getTempleIdFromStorage(): string | null {
    return localStorage.getItem('templateId');
  }

}
