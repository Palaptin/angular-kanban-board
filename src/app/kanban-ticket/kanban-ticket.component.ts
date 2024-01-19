import { Component, Input } from '@angular/core';
import { Ticket } from '../ticket';
import { KanbanBoardComponent } from '../kanban-board/kanban-board.component';
import { TicketService } from '../ticket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kanban-ticket',
  templateUrl: './kanban-ticket.component.html',
  styleUrl: './kanban-ticket.component.css'
})
export class KanbanTicketComponent {
  @Input() ticket!: Ticket;
  @Input() kanban_board!: KanbanBoardComponent;

  constructor(private ticketService: TicketService){}

  onDragStart($event: Event) {
    console.log("onDragStart")
  //throw new Error('Method not implemented.');
  }
  onDraggableCopied($event: Event) {
    console.log("onDraggableCopied")
  //throw new Error('Method not implemented.');
  }
  onDraggableLinked($event: Event) {
    console.log("onDraggableLinked")
  //throw new Error('Method not implemented.');
  }
  onDraggableMoved(event: Event) {
    console.log("onDraggableMoved")
  }
  onDragCanceled($event: Event) {
    console.log("onDragCanceled")
  //throw new Error('Method not implemented.');
  }
  onDragEnd($event: Event) {
    console.log("onDragEnd")
  //throw new Error('Method not implemented.');
  }

  
}
