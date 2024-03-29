import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private Url = environment.url;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  tickets$: Ticket[][] = [[], [], [], [], []];

  constructor(private http: HttpClient) { }


  getTickets(): Ticket[][] {

    let tickets_unordered$ = this.http.get<Ticket[]>(this.Url)

    this.sortTickets(tickets_unordered$)
    return this.tickets$

  }

  sortTickets(tickets$: Observable<Ticket[]>): void {

    let local_tickets: Ticket[][] = [[], [], [], [], []];
    tickets$.subscribe(tickets => {
      for (let ticket of tickets) {
        local_tickets[ticket.state - 1].push(ticket)
      }
    })
    this.tickets$ = local_tickets

  }

  updateTicket(ticket: Ticket): Observable<any> {
    return this.http.put(this.Url + ticket.id + "/", ticket, this.httpOptions)
  }

  createNewTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.Url, ticket, this.httpOptions)
  }

  deleteTickets(ticket: Ticket) {

    let tickets = this.tickets$
    let relevant_ticket_array = tickets[ticket.state - 1]
    let relevant_ticket = relevant_ticket_array.find(x => x.id === ticket.id)

    if (relevant_ticket) {
      let ticket_index = relevant_ticket_array.indexOf(relevant_ticket)
      tickets[ticket.state - 1].splice(ticket_index, 1)
    }

    return this.http.delete<Ticket>(this.Url + ticket.id + '/', this.httpOptions);

  }

  move_insert_ticket(ticket: Ticket) {

    this.tickets$[ticket.state - 1].unshift(ticket)

  }

  move_ticket(ticket: Ticket, state: number) {
    this.deleteTickets(ticket).subscribe()
    ticket.state = state
    this.updateTicket(ticket).subscribe()
    this.move_insert_ticket(ticket)
  }

}
