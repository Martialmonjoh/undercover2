import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommencerPage } from './commencer.page';

describe('CommencerPage', () => {
  let component: CommencerPage;
  let fixture: ComponentFixture<CommencerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommencerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
