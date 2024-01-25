import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { KanbanTicketComponent } from './components/kanban-ticket/kanban-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { DndDraggableDirective, DndModule } from 'ngx-drag-drop';
import { NewTicketPopUpComponent } from './components/new-ticket-pop-up/new-ticket-pop-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTicketPopUpComponent } from './components/edit-ticket-pop-up/edit-ticket-pop-up.component';
import { MessagePopUpComponent } from './components/message-pop-up/message-pop-up.component';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KanbanBoardComponent,
    KanbanTicketComponent,
    NewTicketPopUpComponent,
    EditTicketPopUpComponent,
    MessagePopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DndDraggableDirective,
    DndModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
