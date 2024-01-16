import { Component, HostBinding, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-kanban-board-collumn-1',
  templateUrl: './kanban-board-collumn-1.component.html',
  styleUrl: './kanban-board-collumn-1.component.css'
})

export class KanbanBoardCollumn1Component implements OnInit{
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService){}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets()
        .subscribe(tickets => this.tickets = tickets);
      console.log(this.tickets)
  }
}
