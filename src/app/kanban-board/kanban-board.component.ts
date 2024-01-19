import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { DndDropEvent } from 'ngx-drag-drop';
import { PopUpService } from '../pop-up.service';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})

export class KanbanBoardComponent{


  constructor(public ticketService: TicketService, private popupService: PopUpService){}
  
  ngOnInit(): void {
  
    this.getTickets();

  }

  getTickets(): void {
  
    this.ticketService.getTickets().subscribe()
  
  }

  move_delete_ticket(ticket:Ticket){
  
    this.ticketService.tickets$.subscribe(    
      tickete =>{
        let relevant_ticket_array = tickete[ticket.state-1]
        let relevant_ticket = relevant_ticket_array.find(x => x.id === ticket.id)

        if (relevant_ticket){
          let ticket_index = relevant_ticket_array.indexOf(relevant_ticket)
          tickete[ticket.state-1].splice(ticket_index,1)
        }

      }
    )

  }

  move_insert_ticket(ticket: Ticket){

    this.ticketService.tickets$.subscribe(
      tickete =>{
        tickete[ticket.state-1].unshift(ticket)
      }
    )

  }

  newTicket(){
    this.popupService.open("new_ticket", this.getTickets)
    
  }



  closeNewTicketPopup(){
    this.popupService.close()
  }

  onDrop(event: DndDropEvent, state: number) {
    
    let ticket: Ticket = event.data
    this.move_delete_ticket(ticket)
    ticket.state = state
    this.ticketService.updateTicket(ticket).subscribe()
    this.move_insert_ticket(ticket)
  
  }

}
