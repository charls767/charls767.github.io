import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonScroll } from './boton-scroll';

describe('BotonScroll', () => {
  let component: BotonScroll;
  let fixture: ComponentFixture<BotonScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
