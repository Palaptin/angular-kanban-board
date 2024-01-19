import { Component, Input } from '@angular/core';
import { Ticket } from '../ticket';
import { KanbanBoardComponent } from '../kanban-board/kanban-board.component';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-kanban-ticket',
  templateUrl: './kanban-ticket.component.html',
  styleUrl: './kanban-ticket.component.css'
})
export class KanbanTicketComponent {
  @Input() ticket!: Ticket;
  @Input() kanban_board!: KanbanBoardComponent;

  constructor(private ticketService: TicketService){}

}
