import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeProductionComponent } from './etape-production.component';

describe('EtapeProductionComponent', () => {
  let component: EtapeProductionComponent;
  let fixture: ComponentFixture<EtapeProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapeProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapeProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
