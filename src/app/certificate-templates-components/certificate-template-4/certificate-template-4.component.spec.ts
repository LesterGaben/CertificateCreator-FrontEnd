import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplate4Component } from './certificate-template-4.component';

describe('CertificateTemplate4Component', () => {
  let component: CertificateTemplate4Component;
  let fixture: ComponentFixture<CertificateTemplate4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateTemplate4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateTemplate4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
