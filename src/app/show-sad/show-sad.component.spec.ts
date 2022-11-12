import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSadComponent } from './show-sad.component';

describe('ShowSadComponent', () => {
  let component: ShowSadComponent;
  let fixture: ComponentFixture<ShowSadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
