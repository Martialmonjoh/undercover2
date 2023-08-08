import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoixCartePage } from './choix-carte.page';

describe('ChoixCartePage', () => {
  let component: ChoixCartePage;
  let fixture: ComponentFixture<ChoixCartePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChoixCartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
