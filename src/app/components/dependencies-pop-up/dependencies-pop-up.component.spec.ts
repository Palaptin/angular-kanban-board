import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciesPopUpComponent } from './dependencies-pop-up.component';

describe('DependenciesPopUpComponent', () => {
  let component: DependenciesPopUpComponent;
  let fixture: ComponentFixture<DependenciesPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependenciesPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependenciesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
