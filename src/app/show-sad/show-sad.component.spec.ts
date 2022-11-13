import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, 
         HttpTestingController } from '@angular/common/http/testing';


import { ShowSadComponent } from './show-sad.component';

describe('ShowSadComponent', () => {
  let component: ShowSadComponent;
  let fixture: ComponentFixture<ShowSadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSadComponent ],
      imports: [ HttpTestingController, HttpClientTestingModule ]
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
