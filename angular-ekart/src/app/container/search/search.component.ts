import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  //1.Create an event, (1st-#28 child)
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    
  }

  updateSearchText(inputEL: HTMLInputElement){
    //this.searchText = event.target.value;
    //console.log(inputEL.value);
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
