import { TestBed } from '@angular/core/testing';

import { KanbanTicketService } from './kanban-ticket.service';

describe('KanbanTicketService', () => {
  let service: KanbanTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
