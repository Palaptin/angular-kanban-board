import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Ticket } from './ticket';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private Url = 'api/tickets';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  tickets$: Observable<Ticket[][]> = of([[],[],[],[],[]]);

  getTickets(): Observable<Ticket[][]> {
    
    let tickets_unordered = this.http.get<Ticket[]>(this.Url)
    .pipe(
      catchError(this.handleError<Ticket[]>('getTickets', []))
    );
    this.sortTickets(tickets_unordered)
    return this.tickets$

  }

  sortTickets(tickets: Observable<Ticket[]>): void {
    
    tickets.subscribe(tickets => {
      this.tickets$ = of([[],[],[],[],[]])
      for(let ticket of tickets){
        this.tickets$.subscribe(
          tickete =>{
            tickete[ticket.state-1].push(ticket)
          }
        )
      }
    })
    
  }

  updateTicket(ticket:Ticket): Observable<any>{  

    return this.http.put(this.Url, ticket, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTicket'))
    )

  }

  createNewTicket(ticket:Ticket): Observable<any>{  

    return this.http.post<Ticket>(this.Url, ticket, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTicket'))
    )

  }

  private handleError<T>(operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
