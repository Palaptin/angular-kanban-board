import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanBoardCollumn1Component } from './kanban-board-collumn-1/kanban-board-collumn-1.component';
import { KanbanBoardCollumn2Component } from './kanban-board-collumn-2/kanban-board-collumn-2.component';
import { KanbanBoardCollumn3Component } from './kanban-board-collumn-3/kanban-board-collumn-3.component';
import { KanbanBoardCollumn4Component } from './kanban-board-collumn-4/kanban-board-collumn-4.component';
import { KanbanBoardCollumn5Component } from './kanban-board-collumn-5/kanban-board-collumn-5.component';
import { KanbanTicketComponent } from './kanban-ticket/kanban-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DummyTempDbService } from './dummy-temp-db.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KanbanBoardComponent,
    KanbanBoardCollumn1Component,
    KanbanBoardCollumn2Component,
    KanbanBoardCollumn3Component,
    KanbanBoardCollumn4Component,
    KanbanBoardCollumn5Component,
    KanbanTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DummyTempDbService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
