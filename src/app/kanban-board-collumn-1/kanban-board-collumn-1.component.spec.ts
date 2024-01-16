import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardCollumn1Component } from './kanban-board-collumn-1.component';

describe('KanbanBoardCollumn1Component', () => {
  let component: KanbanBoardCollumn1Component;
  let fixture: ComponentFixture<KanbanBoardCollumn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardCollumn1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanBoardCollumn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
