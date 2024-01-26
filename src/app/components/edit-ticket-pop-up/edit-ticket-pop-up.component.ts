import { Component, ElementRef, Input, WritableSignal } from '@angular/core';
import { Ticket } from '../../interfaces/ticket';
import { PopUpService } from '../../services/pop-up.service';
import { TicketService } from '../../services/ticket.service';
import { PopUp } from '../../interfaces/pop-up';


@Component({
  selector: 'app-edit-ticket-pop-up',
  templateUrl: './edit-ticket-pop-up.component.html',
  styleUrl: './edit-ticket-pop-up.component.css'
})
export class EditTicketPopUpComponent implements PopUp {

  @Input() id!: string;

  isOpen = false;
  private element: any;
  ticket!: Ticket;
  current_tickets?: Ticket;

  constructor(private popUpService: PopUpService, private el: ElementRef, private ticketService: TicketService) {
    this.element = el.nativeElement;
  }

  ngOnInit() {

    this.popUpService.add(this);

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close Pop Up on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'app-new-ticket-pop-up') {
        this.closePopUp();
      }
    });

  }

  ngOnDestroy() {

    this.popUpService.remove(this);
    this.element.remove();

  }

  open(ticket: Ticket) {

    this.isOpen = true;
    this.ticket = ticket
    this.current_tickets = { ...ticket }

  }

  cancel() {
    this.closePopUp()
    this.ticketService.getTickets()
  }


  closePopUp() {
    this.ticket = this.current_tickets || this.ticket
    this.isOpen = false;
  }

  edit_ticket() {

    this.ticketService.updateTicket(this.ticket).subscribe();

    this.closePopUp()

  }

  delete_ticket() {
    this.ticketService.deleteTickets(this.ticket).subscribe()
    this.closePopUp()
  }


}
