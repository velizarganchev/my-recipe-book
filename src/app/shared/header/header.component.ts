import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
