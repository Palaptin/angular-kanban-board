import { Component, ElementRef, Input } from '@angular/core';
import { PopUpService } from '../../services/pop-up.service';
import { PopUp } from '../../interfaces/pop-up';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../interfaces/ticket';

@Component({
  selector: 'app-new-ticket-pop-up',
  templateUrl: './new-ticket-pop-up.component.html',
  styleUrl: './new-ticket-pop-up.component.css'
})
export class NewTicketPopUpComponent implements PopUp {

  @Input() id!: string;

  isOpen = false;
  private element: any;
  ticket!: Ticket;

  callback_function?: Function;

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

  open(callback_function: Function) {

    this.isOpen = true;
    this.callback_function = callback_function
    this.ticket = {
      id: NaN,
      title: '',
      necessary_tickets: [],
      details: '',
      priority: "1", //TODO number
      state: 1
    }

  }

  closePopUp() {

    this.isOpen = false;

  }

  create_new_ticket() {

    this.ticketService.createNewTicket(this.ticket).subscribe(
      remote_ticket => this.ticket.id = remote_ticket.id
    );

    if (this.callback_function) {
      this.callback_function(this.ticket)
    }
    this.closePopUp()

  }


}
