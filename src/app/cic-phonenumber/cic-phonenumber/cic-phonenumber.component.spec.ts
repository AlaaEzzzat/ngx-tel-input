import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicPhonenumberComponent } from './cic-phonenumber.component';

describe('CicPhonenumberComponent', () => {
  let component: CicPhonenumberComponent;
  let fixture: ComponentFixture<CicPhonenumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicPhonenumberComponent]
    });
    fixture = TestBed.createComponent(CicPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
