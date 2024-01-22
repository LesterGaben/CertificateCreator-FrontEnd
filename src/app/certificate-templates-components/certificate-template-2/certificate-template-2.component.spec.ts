import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplate2Component } from './certificate-template-2.component';

describe('CertificateTemplate2Component', () => {
  let component: CertificateTemplate2Component;
  let fixture: ComponentFixture<CertificateTemplate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateTemplate2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
