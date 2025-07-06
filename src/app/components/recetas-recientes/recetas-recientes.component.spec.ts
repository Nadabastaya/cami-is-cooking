import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasRecientesComponent } from './recetas-recientes.component';

describe('RecetasRecientesComponent', () => {
  let component: RecetasRecientesComponent;
  let fixture: ComponentFixture<RecetasRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasRecientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
