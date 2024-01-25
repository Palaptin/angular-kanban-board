import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTicketComponent } from './kanban-ticket.component';

describe('KanbanTicketComponent', () => {
  let component: KanbanTicketComponent;
  let fixture: ComponentFixture<KanbanTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanTicketComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KanbanTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
