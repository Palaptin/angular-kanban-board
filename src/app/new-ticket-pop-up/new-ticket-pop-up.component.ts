import { Component, ElementRef, Input } from '@angular/core';
import { PopUpService } from '../pop-up.service';
import { PopUp } from '../pop-up';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-new-ticket-pop-up',
  templateUrl: './new-ticket-pop-up.component.html',
  styleUrl: './new-ticket-pop-up.component.css'
})
export class NewTicketPopUpComponent implements PopUp{

  @Input() id!: string;
  
  isOpen = false;
  private element: any;
  ticket!:Ticket;

  callback_function?: Function;


  newTicketForm = new FormGroup({
    title: new FormControl(''),
    details: new FormControl(''),
    priority: new FormControl('')
  });

  constructor(private popUpService: PopUpService, private el: ElementRef, private ticketService :TicketService) {
      this.element = el.nativeElement;
  }

  ngOnInit() {

      this.popUpService.add(this);

      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // close Pop Up on background click
      this.element.addEventListener('click', (el: any) => {
          if (el.target.className === 'jw-modal') {
              this.close();
          }
      });

  }

  ngOnDestroy() {
      
    this.popUpService.remove(this);
    this.element.remove();

  }

  open(callback_function:Function) {

      this.isOpen = true;
      this.callback_function = callback_function
      this.ticket = { 
        id: NaN,
        title: this.newTicketForm.value.title ?? '',
        necessary_tickets: [],
        details: this.newTicketForm.value.details ?? '',
        priority: this.newTicketForm.value.priority ?? "1", //TODO number
        state:1 
      }

    }

  close() {

      this.isOpen = false;

  }

  create_new_ticket(){

    let ticket: Ticket

    ticket = { 
      id: NaN,
      title: this.newTicketForm.value.title ?? '',
      necessary_tickets: [],
      details: this.newTicketForm.value.details ?? '',
      priority: this.newTicketForm.value.priority ?? "1", //TODO number
      state:1 
    }

    this.ticketService.createNewTicket(ticket).subscribe();

    if (this.callback_function){
      this.callback_function(ticket)
    }
    this.newTicketForm.reset()

  }

  
}
