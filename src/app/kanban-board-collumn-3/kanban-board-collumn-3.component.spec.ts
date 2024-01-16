import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardCollumn3Component } from './kanban-board-collumn-3.component';

describe('KanbanBoardCollumn3Component', () => {
  let component: KanbanBoardCollumn3Component;
  let fixture: ComponentFixture<KanbanBoardCollumn3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardCollumn3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanBoardCollumn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
