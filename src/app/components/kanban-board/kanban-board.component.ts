import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { DndDropEvent } from 'ngx-drag-drop';
import { PopUpService } from '../../services/pop-up.service';
import { NewTicketPopUpComponent } from '../new-ticket-pop-up/new-ticket-pop-up.component';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})

export class KanbanBoardComponent {

  constructor(public ticketService: TicketService, private popupService: PopUpService) { }

  ngOnInit(): void {
    this.ticketService.getTickets()
  }

  newTicket() {
    let new_ticket_popup = <NewTicketPopUpComponent>this.popupService.getPopup("new_ticket")
    new_ticket_popup.open(this.ticketService.move_insert_ticket)
  }

  onDrop(event: DndDropEvent, state: number) {
    this.ticketService.move_ticket(event.data, state)

  }

}
