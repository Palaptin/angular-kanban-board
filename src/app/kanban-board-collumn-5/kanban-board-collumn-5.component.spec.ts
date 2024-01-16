import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardCollumn5Component } from './kanban-board-collumn-5.component';

describe('KanbanBoardCollumn5Component', () => {
  let component: KanbanBoardCollumn5Component;
  let fixture: ComponentFixture<KanbanBoardCollumn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardCollumn5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanBoardCollumn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
