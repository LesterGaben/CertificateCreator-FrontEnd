import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNonFixedFooterComponent } from './app-non-fixed-footer.component';

describe('AppNonFixedFooterComponent', () => {
  let component: AppNonFixedFooterComponent;
  let fixture: ComponentFixture<AppNonFixedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNonFixedFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppNonFixedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
