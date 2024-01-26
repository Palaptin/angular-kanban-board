import { Injectable, WritableSignal } from '@angular/core';
import { EditTicketPopUpComponent } from '../components/edit-ticket-pop-up/edit-ticket-pop-up.component';
import { PopUpService } from './pop-up.service';
import { Ticket } from '../interfaces/ticket';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root'
})
export class KanbanTicketService {

  constructor(private popupService: PopUpService, private ticketService: TicketService) { }


  edit_ticket(ticket: Ticket) {
    let edit_popup: EditTicketPopUpComponent = <EditTicketPopUpComponent>this.popupService.getPopup("edit_ticket")
    edit_popup.open(ticket)
  }

  save_ticket(ticket: Ticket) {
    if (!Number.isNaN(ticket.id)) { //TODO RICHTIG MACHEN. 
      this.ticketService.updateTicket(ticket).subscribe();
    }
    let edit_popup: EditTicketPopUpComponent = <EditTicketPopUpComponent>this.popupService.getPopup("edit_ticket")
    edit_popup.closePopUp()
  }

}
