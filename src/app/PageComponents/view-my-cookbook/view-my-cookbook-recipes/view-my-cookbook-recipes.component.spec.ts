import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCookbookRecipesComponent } from './view-my-cookbook-recipes.component';

describe('ViewMyCookbookRecipesComponent', () => {
  let component: ViewMyCookbookRecipesComponent;
  let fixture: ComponentFixture<ViewMyCookbookRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyCookbookRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyCookbookRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
