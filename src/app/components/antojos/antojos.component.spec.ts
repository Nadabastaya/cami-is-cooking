import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntojosComponent } from './antojos.component';

describe('AntojosComponent', () => {
  let component: AntojosComponent;
  let fixture: ComponentFixture<AntojosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntojosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntojosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
