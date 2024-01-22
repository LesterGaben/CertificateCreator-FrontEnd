import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateFormationPageComponent } from './certificate-formation-page.component';

describe('CertificateFormationPageComponent', () => {
  let component: CertificateFormationPageComponent;
  let fixture: ComponentFixture<CertificateFormationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateFormationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateFormationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
