import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketPopUpComponent } from './edit-ticket-pop-up.component';

describe('EditTicketPopUpComponent', () => {
  let component: EditTicketPopUpComponent;
  let fixture: ComponentFixture<EditTicketPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTicketPopUpComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditTicketPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
