import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { DndDropEvent } from 'ngx-drag-drop';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {

  constructor(public ticketService: TicketService){
  }
  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe()
    console.log(this.ticketService.tickets$);
  }

  onDrop(event: DndDropEvent, state: number) {
    console.log(event)  
    let ticket: Ticket = event.data
      ticket.state = state
      this.ticketService.updateTicket(ticket).subscribe()
      //this.getTickets()
    
  }

}
