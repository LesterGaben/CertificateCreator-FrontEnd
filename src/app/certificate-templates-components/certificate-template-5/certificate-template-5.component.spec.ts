import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplate5Component } from './certificate-template-5.component';

describe('CertificateTemplate5Component', () => {
  let component: CertificateTemplate5Component;
  let fixture: ComponentFixture<CertificateTemplate5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateTemplate5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateTemplate5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
