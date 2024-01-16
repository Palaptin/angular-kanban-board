import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardCollumn2Component } from './kanban-board-collumn-2.component';

describe('KanbanBoardCollumn2Component', () => {
  let component: KanbanBoardCollumn2Component;
  let fixture: ComponentFixture<KanbanBoardCollumn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardCollumn2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanBoardCollumn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
