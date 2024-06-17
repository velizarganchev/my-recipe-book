import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesIngredientsChipsComponent } from './recipes-ingredients-chips.component';

describe('RecipesIngredientsChipsComponent', () => {
  let component: RecipesIngredientsChipsComponent;
  let fixture: ComponentFixture<RecipesIngredientsChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesIngredientsChipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipesIngredientsChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
