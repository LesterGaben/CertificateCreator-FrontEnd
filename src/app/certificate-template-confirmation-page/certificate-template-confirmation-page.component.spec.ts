import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplateConfirmationPageComponent } from './certificate-template-confirmation-page.component';

describe('CertificateTemplateConfirmationPageComponent', () => {
  let component: CertificateTemplateConfirmationPageComponent;
  let fixture: ComponentFixture<CertificateTemplateConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateTemplateConfirmationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateTemplateConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
