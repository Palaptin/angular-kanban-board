import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { DndDropEvent } from 'ngx-drag-drop';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {

  constructor(private ticketService: TicketService){
  }
  tickets: Ticket[][] = [[],[],[],[],[]];
  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.tickets = [[],[],[],[],[]];
    this.ticketService.getTickets()
        .subscribe(tickets => this.sortTickets(tickets));
    console.log(this.tickets);
  }

  sortTickets(tickets: Ticket[]): void {
    for(let ticket of tickets){
      this.tickets[ticket.state-1].push(ticket)
    }

  }

  moveTicket(ticket:Ticket): void {
    //this.ticketService.moveTicket(ticket,).subscribe()
    //this.getTickets()
  }

  onDrop(event: DndDropEvent, state: number) {
      console.log(event.data)
      console.log(state)
      let ticket: Ticket = event.data //TODO WIE FINDE ICH DEN TYPEN RAUS 
      ticket.state = state
      this.ticketService.updateTicket(ticket).subscribe()
      this.getTickets()
    
  }

}
