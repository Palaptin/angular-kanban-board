import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
  constructor(private ticketService: TicketService){}
  tickets: Ticket[][] = [[],[],[],[],[]];
  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    var ticket_array: Ticket[];
    this.ticketService.getTickets()
        .subscribe(tickets => this.sortTickets(tickets));
    console.log(this.tickets);
    
  }

  sortTickets(tickets: Ticket[]): void {
    for(let ticket of tickets){
      console.log(ticket);
      
      this.tickets[ticket.state-1].push(ticket)
    }

  }

}
