import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplate3Component } from './certificate-template-3.component';

describe('CertificateTemplate3Component', () => {
  let component: CertificateTemplate3Component;
  let fixture: ComponentFixture<CertificateTemplate3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateTemplate3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateTemplate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
