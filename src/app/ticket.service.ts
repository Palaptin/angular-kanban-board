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
  

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.Url)
    .pipe(
      catchError(this.handleError<Ticket[]>('getTickets', []))
      );
  }

  updateTicket(ticket:Ticket): Observable<any>{  
    console.log("updating")
    return this.http.put(this.Url, ticket, this.httpOptions).pipe(
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
