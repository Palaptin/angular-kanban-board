import { Component, HostBinding } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-kanban-board-collumn-1',
  templateUrl: './kanban-board-collumn-1.component.html',
  styleUrl: './kanban-board-collumn-1.component.css'
})

export class KanbanBoardCollumn1Component {
  ticket: Ticket = {
    id: 1,
    necessary_tickets: [],
    title: "Test",
    details: "Testerestes",
    priority:1,
    state:1,
  };
}
