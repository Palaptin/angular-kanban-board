import { Component, ElementRef, Input } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { PopUpService } from '../../services/pop-up.service';
import { PopUp } from '../../interfaces/pop-up';
import { IDropdownSettings } from 'ng-multiselect-dropdown'
import { Ticket } from '../../interfaces/ticket';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependencies-pop-up',
  templateUrl: './dependencies-pop-up.component.html',
  styleUrl: './dependencies-pop-up.component.css'
})
export class DependenciesPopUpComponent implements PopUp {
  @Input() id!: string;
  selected_tickets:any[] = []

  dropdownList: any[] = [];
  ticket!: Ticket
  dropdownSettings: IDropdownSettings = {};
  isOpen = false;
  private element: any;
  dropDownForm!:FormGroup;

  constructor(private popUpService: PopUpService, private el: ElementRef, private ticketService: TicketService, private fb: FormBuilder) {
    this.element = el.nativeElement;

    this.dropdownSettings = {
      idField: 'item_id',
      defaultOpen: true, //TODO  WTF
      textField: 'item_text',
      allowSearchFilter: true,
      enableCheckAll: false,
    };
    this.dropDownForm = this.fb.group({
      myItems: [this.selected_tickets]
    });
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
    this.fill_selected_tickets()
    
  }

  closePopUp() {
    this.isOpen = false;
  }
  
get dropdown_ticket_list(){
  let ticket_list:any = []
  for (let tickets of this.ticketService.tickets$){
    for (let ticket of tickets){
      if(ticket.id != this.ticket.id){
        ticket_list.push({item_id:ticket.id, item_text:ticket.title})
      }
    }
  }
  return ticket_list
}

fill_selected_tickets(){
  let ticket_list:any = []

  if (this.ticket.necessary_tickets){
  for (let tickets of this.ticketService.tickets$){
    for (let ticket of tickets){

      if(this.ticket.necessary_tickets.find(id => {
        id === ticket.id})){
        ticket_list.push({item_id:ticket.id, item_text:ticket.title})
      }

    }
  } 
}
  return ticket_list
}



save(){}

}
