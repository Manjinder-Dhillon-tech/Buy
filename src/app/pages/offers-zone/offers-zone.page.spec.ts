import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffersZonePage } from './offers-zone.page';

describe('OffersZonePage', () => {
  let component: OffersZonePage;
  let fixture: ComponentFixture<OffersZonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
