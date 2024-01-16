import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class DummyTempDbService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const tickets: Ticket[] = [
      { id: 12, title: "Ticket nr.12", necessary_tickets: [], details: "Details zu Ticket nr. 12" , priority:1, state:1 },
      { id: 13, title: "Ticket nr.13", necessary_tickets: [], details: "Details zu Ticket nr. 13" , priority:2, state:1 },
      { id: 14, title: "Ticket nr.14", necessary_tickets: [], details: "Details zu Ticket nr. 14" , priority:3, state:1 },
      { id: 15, title: "Ticket nr.15", necessary_tickets: [], details: "Details zu Ticket nr. 15" , priority:1, state:2 },
      { id: 16, title: "Ticket nr.16", necessary_tickets: [], details: "Details zu Ticket nr. 16" , priority:2, state:2 },
      { id: 17, title: "Ticket nr.17", necessary_tickets: [], details: "Details zu Ticket nr. 17" , priority:3, state:2 },
      { id: 18, title: "Ticket nr.18", necessary_tickets: [], details: "Details zu Ticket nr. 18" , priority:1, state:4 },
      { id: 19, title: "Ticket nr.19", necessary_tickets: [], details: "Details zu Ticket nr. 19" , priority:3, state:5 },
      { id: 20, title: "Ticket nr.20", necessary_tickets: [], details: "Details zu Ticket nr. 20" , priority:1, state:3 },
      ];
    return {tickets};
  }
}
