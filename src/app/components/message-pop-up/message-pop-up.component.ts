import { Component, ElementRef, Input } from '@angular/core';
import { Ticket } from '../../interfaces/ticket';
import { PopUpService } from '../../services/pop-up.service';
import { TicketService } from '../../services/ticket.service';
import { PopUp } from '../../interfaces/pop-up';

@Component({
  selector: 'app-message-pop-up',
  templateUrl: './message-pop-up.component.html',
  styleUrl: './message-pop-up.component.css'
})
export class MessagePopUpComponent implements PopUp {

  @Input() id!: string;

  isOpen = false;
  private element: any;
  message!: string;

  constructor(private popUpService: PopUpService, private el: ElementRef,) {
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

  open(message: string) {

    this.isOpen = true;
    this.message = message

  }

  closePopUp() {

    this.isOpen = false;

  }

}
