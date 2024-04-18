import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinListService } from '../shoppin-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) slForm;

  subscription: Subscription;
  editedItemIndex: number;
  editMode: boolean;
  editedItem: Ingredient;

  constructor(private slService: ShoppinListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });

      });
  }

  onAddItem(form: NgForm) {
    const inputs = form.value;
    const ingredient = new Ingredient(inputs.name, inputs.amount);

    if (!this.editMode) {
      this.slService.addIngredient(ingredient);
    } else {
      this.slService.updateIngredient(this.editedItemIndex, ingredient);
    }

    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;  
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}