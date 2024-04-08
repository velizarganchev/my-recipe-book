import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinListService } from '../shoppin-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
  @ViewChild('name') nameInputRef: ElementRef;
  @ViewChild('amount') amountInputRef: ElementRef;

  constructor(private slService: ShoppinListService) { }

  onAddItem() {
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);

    this.slService.addIngredient(ingredient);
  }
}
