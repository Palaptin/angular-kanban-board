import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketPopUpComponent } from './new-ticket-pop-up.component';

describe('NewTicketPopUpComponent', () => {
  let component: NewTicketPopUpComponent;
  let fixture: ComponentFixture<NewTicketPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTicketPopUpComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewTicketPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
