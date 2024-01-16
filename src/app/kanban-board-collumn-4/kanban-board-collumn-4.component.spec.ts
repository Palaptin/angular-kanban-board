import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardCollumn4Component } from './kanban-board-collumn-4.component';

describe('KanbanBoardCollumn4Component', () => {
  let component: KanbanBoardCollumn4Component;
  let fixture: ComponentFixture<KanbanBoardCollumn4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardCollumn4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanBoardCollumn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
