import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  tickets$: Observable<Ticket[][]> = of([[], [], [], [], []]);

  getTickets(): Observable<Ticket[][]> {

    let tickets_unordered = this.http.get<Ticket[]>(this.Url)

    this.sortTickets(tickets_unordered)
    return this.tickets$

  }

  sortTickets(tickets: Observable<Ticket[]>): void {

    tickets.subscribe(tickets => {
      this.tickets$ = of([[], [], [], [], []])
      for (let ticket of tickets) {
        this.tickets$.subscribe(
          tickete => {
            tickete[ticket.state - 1].push(ticket)
          }
        )
      }
    })

  }

  updateTicket(ticket: Ticket): Observable<any> {

    return this.http.put(this.Url + ticket.id + "/", ticket, this.httpOptions)

  }

  createNewTicket(ticket: Ticket): Observable<Ticket> {

    return this.http.post<Ticket>(this.Url, ticket, this.httpOptions)

  }

  deleteTickets(ticket: Ticket) {

    this.tickets$.subscribe(
      tickets => {
        let relevant_ticket_array = tickets[ticket.state - 1]
        let relevant_ticket = relevant_ticket_array.find(x => x.id === ticket.id)

        if (relevant_ticket) {
          let ticket_index = relevant_ticket_array.indexOf(relevant_ticket)
          tickets[ticket.state - 1].splice(ticket_index, 1)
        }
      }

    )

    // return this.http.delete<Ticket>(this.Url + ticket.id + '/', this.httpOptions).pipe(
    //   catchError(this.handleError<Ticket>('deleteTicket'))
    // );
    return this.http.delete<Ticket>(this.Url + ticket.id + '/', this.httpOptions);

  }

  // private handleError<T>(operation = 'operation', result?: T) {

  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }


}
