import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCreatedCertificateComponent } from './download-created-certificate.component';

describe('DownloadCreatedCertificateComponent', () => {
  let component: DownloadCreatedCertificateComponent;
  let fixture: ComponentFixture<DownloadCreatedCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCreatedCertificateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadCreatedCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
