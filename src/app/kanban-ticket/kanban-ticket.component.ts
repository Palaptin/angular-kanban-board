import { Component, Input } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-kanban-ticket',
  templateUrl: './kanban-ticket.component.html',
  styleUrl: './kanban-ticket.component.css'
})
export class KanbanTicketComponent {
  @Input() ticket?: Ticket;

  
}
