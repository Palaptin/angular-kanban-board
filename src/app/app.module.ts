import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanTicketComponent } from './kanban-ticket/kanban-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DummyTempDbService } from './dummy-temp-db.service';
import { DndDraggableDirective, DndModule } from 'ngx-drag-drop';
import { NewTicketPopUpComponent } from './new-ticket-pop-up/new-ticket-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KanbanBoardComponent,
    KanbanTicketComponent,
    NewTicketPopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DummyTempDbService, { dataEncapsulation: false }),
      DndDraggableDirective,
      DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
