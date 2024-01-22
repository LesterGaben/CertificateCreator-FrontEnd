import { TestBed } from '@angular/core/testing';

import { CertificateTemplateMoveService } from './certificate-template-move.service';

describe('CertificateTemplateDataService', () => {
  let service: CertificateTemplateMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificateTemplateMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
