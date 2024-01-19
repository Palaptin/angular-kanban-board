import { Component, ElementRef, Input } from '@angular/core';
import { PopUpService } from '../pop-up.service';
import { PopUp } from '../pop-up';

@Component({
  selector: 'app-new-ticket-pop-up',
  templateUrl: './new-ticket-pop-up.component.html',
  styleUrl: './new-ticket-pop-up.component.css'
})
export class NewTicketPopUpComponent implements PopUp{

  @Input() id!: string;
  
  isOpen = false;
  private element: any;

  constructor(private popUpService: PopUpService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit() {
      // add self (this modal instance) to the modal service so it can be opened from any component
      this.popUpService.add(this);

      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // close modal on background click
      this.element.addEventListener('click', (el: any) => {
          if (el.target.className === 'jw-modal') {
              this.close();
          }
      });
  }

  ngOnDestroy() {
      // remove self from modal service
      this.popUpService.remove(this);

      // remove modal element from html
      this.element.remove();
  }

  open() {
      this.isOpen = true;
    }

  close() {
      this.isOpen = false;
  }

}
