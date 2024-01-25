import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplate6Component } from './certificate-template-6.component';

describe('CertificateTemplate6Component', () => {
  let component: CertificateTemplate6Component;
  let fixture: ComponentFixture<CertificateTemplate6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateTemplate6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateTemplate6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
