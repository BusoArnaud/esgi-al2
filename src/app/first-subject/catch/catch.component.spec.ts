import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchComponent } from './catch.component';

describe('CatchComponent', () => {
  let component: CatchComponent;
  let fixture: ComponentFixture<CatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
