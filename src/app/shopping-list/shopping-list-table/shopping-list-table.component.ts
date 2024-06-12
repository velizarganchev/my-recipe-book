import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ShoppinListService } from '../shoppin-list.service';

@Component({
  selector: 'app-shopping-list-table',
  templateUrl: './shopping-list-table.component.html',
  styleUrl: './shopping-list-table.component.scss',
})
export class ShoppingListTableComponent {
  @Input() ingredients: Ingredient[];
  
  constructor(private shoppinListService: ShoppinListService) { }

  onEditItem(index: number) {
    this.shoppinListService.startedEditing.next(index);
  }

  displayedColumns: string[] = ['name', 'amount'];
}
