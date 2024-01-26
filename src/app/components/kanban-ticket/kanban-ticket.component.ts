import { Component, EventEmitter, Input, Output, Signal, WritableSignal, signal } from '@angular/core';
import { Ticket } from '../../interfaces/ticket';
import { TicketService } from '../../services/ticket.service';
import { KanbanTicketService } from '../../services/kanban-ticket.service';

@Component({
  selector: 'app-kanban-ticket',
  templateUrl: './kanban-ticket.component.html',
  styleUrl: './kanban-ticket.component.css'
})

export class KanbanTicketComponent {
  @Input() ticket!: Ticket;
  @Input() ticket_not_draggable!: boolean;
  @Input() full_editable: boolean = false;
  @Input() editing_allowed: boolean = true;
  @Output() ticket_saved = new EventEmitter<KanbanTicketComponent>();
  @Output() editing_requested = new EventEmitter<KanbanTicketComponent>();
  @Output() ticket_was_deleted = new EventEmitter<KanbanTicketComponent>();
  @Output() ticketChange = new EventEmitter<Ticket>();
  ticket_design!: ITicketDesign;

  constructor(private my_service: KanbanTicketService) { }

  ngOnInit() {

    if (this.full_editable) {
      this.ticket_design = { details_editable: true, necessary_tickets_editable: true, priority_editable: true, state_editable: true, title_editable: true }
    }
    else {
      this.ticket_design = { details_editable: false, necessary_tickets_editable: false, priority_editable: false, state_editable: false, title_editable: false }
    }
  }

  get any_field_editable(): Boolean {

    if (!this.ticket_design.details_editable
      || !this.ticket_design.necessary_tickets_editable
      || !this.ticket_design.priority_editable
      || !this.ticket_design.state_editable
      || !this.ticket_design.title_editable
    ) {
      return false
    }
    else {

      // document.getElementById('priority')?.focus()
      return true

    }

  }

  onSave() {
    this.my_service.save_ticket(this.ticket)
  }

  onEditRequest() {
    this.my_service.edit_ticket(this.ticket);

    console.log(this.ticket);
  }

}

export interface ITicketDesign {

  title_editable: boolean;
  necessary_tickets_editable: boolean;
  details_editable: boolean;
  priority_editable: boolean;
  state_editable: boolean;

}
