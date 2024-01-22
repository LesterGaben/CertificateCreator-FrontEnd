import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplate1Component } from './certificate-template-1.component';

describe('CertificateTemplate1Component', () => {
  let component: CertificateTemplate1Component;
  let fixture: ComponentFixture<CertificateTemplate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateTemplate1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
