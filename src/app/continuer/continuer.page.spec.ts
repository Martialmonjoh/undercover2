import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinuerPage } from './continuer.page';

describe('ContinuerPage', () => {
  let component: ContinuerPage;
  let fixture: ComponentFixture<ContinuerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContinuerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
