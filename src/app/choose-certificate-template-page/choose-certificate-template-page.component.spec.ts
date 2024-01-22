import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCertificateTemplatePageComponent } from './choose-certificate-template-page.component';

describe('ChooseCertificateTemplatePageComponent', () => {
  let component: ChooseCertificateTemplatePageComponent;
  let fixture: ComponentFixture<ChooseCertificateTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseCertificateTemplatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseCertificateTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
