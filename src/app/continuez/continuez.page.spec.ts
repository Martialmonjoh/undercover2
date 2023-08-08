import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinuezPage } from './continuez.page';

describe('ContinuezPage', () => {
  let component: ContinuezPage;
  let fixture: ComponentFixture<ContinuezPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContinuezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
